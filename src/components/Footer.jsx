import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(5px)",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
        color: "#5C7C8A",
        textAlign: "center",
        padding: "1rem",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
        Rishabh Barnwal Portfolio
      </Typography>
    </Box>
  );
};

export default Footer;
