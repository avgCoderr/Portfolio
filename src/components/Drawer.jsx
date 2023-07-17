import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";

const pages = [
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const GlassDrawer = styled(Drawer)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
  "& .MuiDrawer-paper": {
    backdropFilter: "blur(5px)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
  },
}));

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();

  const handleItemClick = (path) => {
    navigate(path);
    setOpenDrawer(false);
  };

  return (
    <React.Fragment>
      <GlassDrawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {pages.map((page, index) => (
            <ListItemButton
              key={index}
              onClick={() => handleItemClick(page.path)}
            >
              <ListItemIcon>
                <ListItemText sx={{ color: "#000000" }}>
                  {page.label}
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </GlassDrawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
