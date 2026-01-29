import React, { useContext } from "react";
import { IconButton, Tooltip } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ThemeContext } from "../theme/themeController";

const ThemeToggleButton = () => {
    const { mode, toggleMode } = useContext(ThemeContext);

    return (
        <Tooltip title="Toggle Theme">
            <IconButton onClick={toggleMode} color="inherit">
                {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
        </Tooltip>
    );
};

export default ThemeToggleButton;
