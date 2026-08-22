"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from "react";

interface ActiveSectionContextType {
  activeSection: string;
  setActiveSection: Dispatch<SetStateAction<string>>;
}

interface ActiveSectionProviderProps {
  children: ReactNode;
}

const ActiveSectionContext =
  createContext<ActiveSectionContextType | undefined>(undefined);

export function ActiveSectionProvider({
  children,
}: ActiveSectionProviderProps) {
  const [activeSection, setActiveSection] = useState<string>(() => {
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
  const context = useContext(ActiveSectionContext);

  if (!context) {
    throw new Error(
      "useActiveSection must be used within ActiveSectionProvider"
    );
  }

  return context;
}
