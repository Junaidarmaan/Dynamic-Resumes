import React, { createContext, useContext, useState } from "react";
const UXContext = createContext(null);

export const UXProvider = ({ children }) => {
  // ✅ UX State (for now only displayMode)
  const [displayMode, setDisplayMode] = useState("dark"); // "light" | "dark"

  const toggleDisplayMode = () => {
    setDisplayMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <UXContext.Provider
      value={{
        displayMode,
        setDisplayMode,
        toggleDisplayMode,
      }}
    >
      {children}
    </UXContext.Provider>
  );
};

export const useUX = () => {
  const ctx = useContext(UXContext);
  if (!ctx) {
    throw new Error("useUX must be used inside UXProvider");
  }
  return ctx;
};
