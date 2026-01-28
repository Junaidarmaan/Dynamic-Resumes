import React, { createContext, useState, useMemo, useEffect } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { buildTheme } from "./themeConfig";

export const ThemeContext = createContext();

const DEFAULT_PALETTE = "emerald";

export const ThemeController = ({ children }) => {
    const [mode, setMode] = useState("dark");
    const [palette] = useState(DEFAULT_PALETTE);

    // Load saved mode
    useEffect(() => {
        const savedMode = localStorage.getItem("mui-theme-mode");
        if (savedMode) setMode(savedMode);
    }, []);

    // Save mode
    useEffect(() => {
        localStorage.setItem("mui-theme-mode", mode);
    }, [mode]);

    const theme = useMemo(() => buildTheme(palette, mode), [palette, mode]);

    const toggleMode = () => {
        setMode((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider value={{ mode, toggleMode }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
