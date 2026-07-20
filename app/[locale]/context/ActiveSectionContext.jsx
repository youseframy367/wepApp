"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ActiveSectionContext = createContext();

export function ActiveSectionProvider({ children }) {
  const [activeSection, setActiveSection] = useState("Manage Playlists");

  useEffect(() => {
    const saved = sessionStorage.getItem("activeSection");
    if (saved) {
      setActiveSection(saved);
    }
  }, []);

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