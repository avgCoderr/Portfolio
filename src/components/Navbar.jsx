import React, { useState } from "react";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import DrawerComp from "./Drawer";
import signature from "../assets/signature.png";

const tabStyle = { color: "#5C7C8A", mx: 4, fontSize: "1rem" };
const logoStyle = {
  height: "2rem",
  mx: 3,
};

const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const location = useLocation();

  const handleTabClick = (path, index) => {
    navigate(path, { replace: true });
    setSelectedTab(index);
  };

  // Update selectedTab based on the current route
  React.useEffect(() => {
    if (location.pathname === "/skills") {
      setSelectedTab(0);
    } else if (location.pathname === "/home") {
      setSelectedTab(1);
    } else if (location.pathname === "/contact") {
      setSelectedTab(2);
    }
  }, [location]);

  return (
    <React.Fragment>
      <AppBar
        sx={{
          backdropFilter: "blur(5px)",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
        }}
        position="static"
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isMatch ? (
            <>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Link to="/home" style={{ textDecoration: "none" }}>
                  <img src={signature} alt="Logo" style={logoStyle} />
                </Link>
              </Box>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                value={selectedTab}
                TabIndicatorProps={{ style: { backgroundColor: "#5C7C8A" } }}
                sx={{ "& .MuiTab-root": { color: "#5C7C8A" } }}
              >
                <Tab
                  label="Skills"
                  onClick={() => handleTabClick("/skills", 0)}
                  sx={tabStyle}
                />
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Link
                    component="button"
                    to="/home"
                    onClick={() => handleTabClick("/home", 1)}
                    style={{ textDecoration: "none" }}
                  >
                    <img src={signature} alt="Logo" style={logoStyle} />
                  </Link>
                </Box>
                <Tab
                  label="Contact"
                  onClick={() => handleTabClick("/contact", 2)}
                  sx={tabStyle}
                />
              </Tabs>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
