"use server";

import { cookies } from "next/headers";

export async function setAgreementStep(
  step: "customer" | "reseller" | "done"
) {
  const cookieStore = await cookies();

  cookieStore.set("agreementStep", step, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  });
}