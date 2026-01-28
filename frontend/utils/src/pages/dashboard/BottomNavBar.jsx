import React from "react";
import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";

const BottomNavBar = () => {
  const [value, setValue] = React.useState(0);

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
        onChange={(event, newValue) => setValue(newValue)}
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
              color: "secondary.secondary",
            },
          }}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavBar;
