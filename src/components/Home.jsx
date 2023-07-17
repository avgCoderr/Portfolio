import React, { useState, useEffect } from "react";
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
  styled,
  Box,
  Link,
  Tooltip,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FingerprintIcon from "@mui/icons-material/Fingerprint";

import Profile from "../assets/profile.jpg";

const MainContainer = styled(Grid)({
  position: "fixed",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

const AvatarContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "310px",
  height: "310px",
  borderRadius: "50%",
  backgroundColor: "#fff",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
  margin: "auto",

  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(6),
    width: "260px",
    height: "260px",
  },
}));

const GlassCard = styled(Card)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
  backdropFilter: "blur(5px)",
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  margin: theme.spacing(2),
  color: "#3a4f58",

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    marginBottom: theme.spacing(0),
  },
}));

const LinkStyle = styled(Link)(({ theme }) => ({
  marginRight: theme.spacing(4),

  [theme.breakpoints.down("md")]: {
    marginRight: theme.spacing(2),
  },
}));

const AvatarStyle = styled(Avatar)(({ theme }) => ({
  width: "300px",
  height: "300px",

  [theme.breakpoints.down("md")]: {
    width: "250px",
    height: "250px",
  },
}));

const IconStyle = { color: "#3a4f58", fontSize: "2rem" };

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <MainContainer
      container
      justifyContent="center"
      alignItems="center"
      style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 1s ease" }}
    >
      <Grid item xs={12} sm={6} md={4}>
        <AvatarContainer>
          <AvatarStyle
            src={Profile}
            alt="Profile Image"
            sx={{
              width: "300px",
              height: "300px",
            }}
          />
        </AvatarContainer>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <GlassCard>
          <CardContent>
            <Typography variant="h4" mb={0}>
              Hi, I'm Rishabh
            </Typography>
            <Typography variant="h6">
              Your friendly neighborhood avgCoderr!
            </Typography>
            <Typography variant="body2" mt={3} mb={4}>
              An undergraduate student at BITS Pilani (India), persuing my
              degree in Computer Science (currently in my fourth year).
            </Typography>

            <Box>
              <Tooltip title={"Github"} arrow>
                <LinkStyle
                  href="https://github.com/avgCoderr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon style={IconStyle} />
                </LinkStyle>
              </Tooltip>
              <Tooltip title={"Instagram"} arrow>
                <LinkStyle
                  href="https://www.instagram.com/burn.wall/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon style={IconStyle} />
                </LinkStyle>
              </Tooltip>
              <Tooltip title={"LinkedIn"} arrow>
                <LinkStyle
                  href="https://www.linkedin.com/in/rishabh-barnwal/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon style={IconStyle} />
                </LinkStyle>
              </Tooltip>
              <Tooltip title={"Twitter"} arrow>
                <LinkStyle
                  href="https://twitter.com/0xburnwal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon style={IconStyle} />
                </LinkStyle>
              </Tooltip>
              <Tooltip title={"Resume"} arrow>
                <LinkStyle
                  href="https://drive.google.com/file/d/1nd3L_Sr14F88dT6pSQJ-6AlQAO2l_RL_/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FingerprintIcon style={IconStyle} />
                </LinkStyle>
              </Tooltip>
            </Box>
          </CardContent>
        </GlassCard>
      </Grid>
    </MainContainer>
  );
};

export default Home;
