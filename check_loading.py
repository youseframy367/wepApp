"""Verify the loading screen appears during client navigation."""
import asyncio
from playwright.async_api import async_playwright


async def main() -> None:
    results = []
    async with async_playwright() as pw:
        browser = await pw.chromium.launch()
        page = await browser.new_page()

        # 1) Full reload of a slow-ish route: observe z-9999999 element presence
        await page.goto("http://localhost:3000/en/FAQ", wait_until="commit")
        spinner_initial = await page.locator(".z-9999999").count()
        # wait for page to settle
        await page.wait_for_timeout(6000)
        spinner_after = await page.locator(".z-9999999").count()
        results.append(("FAQ reload", spinner_initial, spinner_after))

        # 2) Client navigation home -> FAQ: tap link "FAQ"
        await page.goto("http://localhost:3000/en", wait_until="networkidle")
        await page.wait_for_timeout(2000)
        spinner_before = await page.locator(".z-9999999").count()
        # click FAQ link (footer/header link)
        try:
            await page.click("text=FAQ")
        except Exception:
            await page.goto("http://localhost:3000/en/FAQ", wait_until="commit")
        await page.wait_for_timeout(400)
        spinner_during = await page.locator(".z-9999999").count()
        await page.wait_for_timeout(7000)
        spinner_end = await page.locator(".z-9999999").count()
        results.append(("nav home->FAQ", spinner_before, spinner_during, spinner_end))

        await browser.close()
    for r in results:
        print(r)


asyncio.run(main())
