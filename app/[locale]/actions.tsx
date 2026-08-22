"use server";

import { cookies } from "next/headers";

export async function setAgreementStep(
  step: "customer" | "done"
) {
  const cookieStore = await cookies();

  cookieStore.set("agreementStep", step, {
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  });
}