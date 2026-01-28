import ThemeToggleButton from "../../../context/ThemeToggleButton";
import { Box } from "@mui/material";

const Header = () => {
    return (
        <Box
            sx={{
                position: "fixed",
                top: 12,
                right: 12,
                zIndex: 3000,
            }}
        >
            <ThemeToggleButton />
        </Box>
    );
};

export default Header;
