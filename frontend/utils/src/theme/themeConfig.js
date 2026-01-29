import { createTheme } from "@mui/material/styles";
import React from "react";
/**
 * ===============================
 * 🎨 COLOR PALETTES (LIGHT + DARK)
 * ===============================
 */

const THEMES = {
  indigo: {
    name: "Indigo",
    light: {
      palette: {
        mode: "light",

        primary: { main: "#5B5FC7" },
        secondary: { main: "#22C55E" },

        background: {
          default: "#F8FAFC",
          paper: "#FFFFFF",
        },

        text: {
          primary: "#0F172A",
          secondary: "#475569",
        },
      },
    },
    dark: {
      palette: {
        mode: "dark",

        primary: { main: "#5B5FC7" },
        secondary: { main: "#22C55E" },

        background: {
          default: "#0B0F19",
          paper: "#111827",
        },

        text: {
          primary: "#E5E7EB",
          secondary: "#9CA3AF",
        },
      },
    },
  },

  emerald: {
    name: "Emerald",
    light: {
      palette: {
        mode: "light",

        primary: { main: "#10B981" },
        secondary: { main: "#38BDF8" },

        background: {
          default: "#F8FAFC",
          paper: "#FFFFFF",
        },

        text: {
          primary: "#0F172A",
          secondary: "#475569",
        },
      },
    },
    dark: {
      palette: {
        mode: "dark",

        primary: { main: "#10B981" },
        secondary: { main: "#38BDF8" },

        background: {
          default: "#020617",
          paper: "#020617",
        },

        text: {
          primary: "#ECFEFF",
          secondary: "#94A3B8",
        },
      },
    },
  },

  rose: {
    name: "Rose",
    light: {
      palette: {
        mode: "light",

        primary: { main: "#F43F5E" },
        secondary: { main: "#A855F7" },

        background: {
          default: "#FAFAFA",
          paper: "#FFFFFF",
        },

        text: {
          primary: "#18181B",
          secondary: "#52525B",
        },
      },
    },
    dark: {
      palette: {
        mode: "dark",

        primary: { main: "#F43F5E" },
        secondary: { main: "#A855F7" },

        background: {
          default: "#09090B",
          paper: "#18181B",
        },

        text: {
          primary: "#FAFAFA",
          secondary: "#A1A1AA",
        },
      },
    },
  },

  ocean: {
    name: "Ocean",
    light: {
      palette: {
        mode: "light",

        primary: { main: "#6366F1" },
        secondary: { main: "#0EA5E9" },

        background: {
          default: "#F8FAFC",
          paper: "#FFFFFF",
        },

        text: {
          primary: "#0F172A",
          secondary: "#475569",
        },
      },
    },
    dark: {
      palette: {
        mode: "dark",

        primary: { main: "#6366F1" },
        secondary: { main: "#0EA5E9" },

        background: {
          default: "#020617",
          paper: "#0F172A",
        },

        text: {
          primary: "#E2E8F0",
          secondary: "#94A3B8",
        },
      },
    },
  },
};

/**
 * ===============================
 * 🔁 ACTIVE SETTINGS (CHANGE THESE)
 * ===============================
 */

// ✅ Select Palette
// "light" | "dark"
/**
 * ===============================
 * 🧱 CREATE FINAL THEME =========
 * ===============================
 */

export const buildTheme = (paletteName, mode) => {
  return createTheme({
    ...THEMES[paletteName][mode],

    shape: {
      borderRadius: 12,
    },

    typography: {
      fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    },
  });
};
