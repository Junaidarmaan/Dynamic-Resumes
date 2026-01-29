import React from "react";
import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import DescriptionIcon from "@mui/icons-material/Description";
import { useAuth } from "../../context/AuthContext";

const BottomNavBar = () => {
  const [value, setValue] = React.useState(0);
  const { logout } = useAuth();

  const handleChange = (event, newValue) => {
    // If Logout tab clicked
    if (newValue === 2) {
      logout();
      return;
    }
    setValue(newValue);
  };

  return (
    <Paper
      elevation={10}
      sx={{
        position: "fixed",
        bottom: 20,
        left: "50%",
        transform: "translateX(-50%)",
        width: "fit-content",
        px: 1.2,
        py: 0.6,
        borderRadius: 4,
        backgroundColor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        zIndex: 1300,
      }}
    >
      <BottomNavigation
        value={value}
        onChange={handleChange}
        showLabels
        sx={{
          backgroundColor: "transparent",
          borderRadius: 4,
        }}
      >
        <BottomNavigationAction
          label="Profile"
          icon={<PersonIcon />}
          sx={{
            color: "text.secondary",
            "&.Mui-selected": {
              color: "primary.main",
            },
          }}
        />

        <BottomNavigationAction
          label="Resume"
          icon={<DescriptionIcon />}
          sx={{
            color: "text.secondary",
            "&.Mui-selected": {
              color: "secondary.main",
            },
          }}
        />

        <BottomNavigationAction
          label="Logout"
          icon={<LogoutIcon />}
          sx={{
            color: "text.secondary",
            "&.Mui-selected": {
              color: "error.main",
            },
          }}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavBar;
