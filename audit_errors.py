"""Scan wepApp routes for JS errors, failed requests, and leaked translation keys."""
import asyncio
import json
import re
from playwright.async_api import async_playwright

ROUTES = [
    "/en", "/en/FAQ", "/ar", "/ar/FAQ", "/en/Dashboard", "/en/DownloadAndWatching",
    "/en/legal-policy", "/en/legal-policy/TermsAndConditions",
    "/en/legal-policy/privacyPolicy", "/en/legal-policy/EULA",
    "/en/legal-policy/RefundPolicy", "/en/legal-policy/NotSellOrShare",
    "/en/legal-policy/GlobalCompliance", "/en/legal-policy/OurMission",
    "/en/legal-policy/DisclaimerOfContent", "/en/legal-policy/CompanyInfo",
    "/en/agreement/customer", "/en/agreement/reseller",
    "/en/logInManageBlayList", "/en/logInManageBlayList/manageBlayList",
    "/en/logInManageBlayList/manageBlayList/addPlayList",
    "/en/logInManageBlayList/manageBlayList/AddXCPlayList",
]

JS_ERROR_RE = re.compile(r"(Uncaught|Unhandled|TypeError|SyntaxError|ReferenceError|Failed to fetch|not a function|cannot read propert|is not defined)", re.I)


async def check_page(page, route: str):
    errors = []
    failed = []

    async def on_console(msg):
        t = msg.type
        if t in ("error", "warning"):
            txt = str(msg.text)
            if JS_ERROR_RE.search(txt) or "MISSING_MESSAGE" in txt or "hydrate" in txt.lower():
                errors.append(f"[{t}] {txt[:200]}")

    async def on_response(resp):
        if resp.status >= 400:
            failed.append(f"{resp.status} {resp.url[:140]}")

    page.on("console", on_console)
    page.on("response", on_response)

    try:
        await page.goto(f"http://localhost:3000{route}", wait_until="networkidle", timeout=40000)
    except Exception as e:
        errors.append(f"NAV_FAIL {e}")
    await page.wait_for_timeout(2000)

    html = ""
    try:
        html = await page.content()
    except Exception:
        pass

    # leaked translation keys in rendered text
    leaks = re.findall(r">([A-Z][a-zA-Z]+\.[a-zA-Z0-9_.]+)<", html)
    leaks = [l for l in leaks if "." in l and not any(k in l.lower() for k in ["http", "www", ".com", ".js", ".css", ".svg", ".png", ".webp", ".jpg"])]
    # dedupe
    leaks = list(dict.fromkeys(leaks))[:10]

    page.remove_listener("console", on_console)
    page.remove_listener("response", on_response)
    return {
        "route": route,
        "js_errors": list(dict.fromkeys(errors))[:15],
        "failed_requests": list(dict.fromkeys(failed))[:15],
        "leaked_keys": leaks,
    }


async def main():
    out = []
    async with async_playwright() as pw:
        browser = await pw.chromium.launch()
        page = await browser.new_page()
        for route in ROUTES:
            r = await check_page(page, route)
            out.append(r)
            flag = ""
            if r["js_errors"]: flag += f" JS:{len(r['js_errors'])}"
            if r["failed_requests"]: flag += f" 4xx:{len(r['failed_requests'])}"
            if r["leaked_keys"]: flag += f" keys:{len(r['leaked_keys'])}"
            print(r["route"], flag if flag else "clean")
        await browser.close()
    with open("/home/ubuntu/audit_results.json", "w") as f:
        json.dump(out, f, indent=2, ensure_ascii=False)


asyncio.run(main())
