"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ActiveSectionContext = createContext();

export function ActiveSectionProvider({ children }) {
  const [activeSection, setActiveSection] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        sessionStorage.getItem("activeSection") || "manage-playlists"
      );
    }
    return "manage-playlists";
  });

  useEffect(() => {
    sessionStorage.setItem("activeSection", activeSection);
  }, [activeSection]);

  return (
    <ActiveSectionContext.Provider
      value={{ activeSection, setActiveSection }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  return useContext(ActiveSectionContext);
}