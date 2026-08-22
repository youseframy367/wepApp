"use client";

import React from "react";

export default function AosProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // AOS has been removed to improve performance and stability.
  // This provider remains to avoid breaking existing layout wraps, 
  // but it no longer initializes or manages any animations.
  return <>{children}</>;
}
