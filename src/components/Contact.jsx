import React, { useState, useEffect } from "react";
import {
  Card,
  Grid,
  styled,
  Button,
  FormControl,
  TextField,
  Tooltip,
  FormHelperText,
} from "@mui/material";

import Image from "../assets/profile.jpg";

const MainContainer = styled(Grid)(({ theme }) => ({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "900px",

  [theme.breakpoints.down("lg")]: {
    width: "300px",
  },
}));

const GlassCard = styled(Card)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(10px)",
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

const FormGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column-reverse",
  },
}));

const TranslucentButton = styled(Button)(({ theme }) => ({
  color: "#ffffff",
  backgroundColor: "rgba(34, 133, 213, 0.6)",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    backgroundColor: "rgba(0, 140, 255, 0.6)",
  },
}));

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isNameError, setIsNameError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isMessageError, setIsMessageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
    setIsNameError(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsEmailError(false);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    setIsMessageError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name === "") {
      setIsNameError(true);
    }

    if (email === "") {
      setIsEmailError(true);
    }

    if (message === "") {
      setIsMessageError(true);
    }
  };

  return (
    <MainContainer
      style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.5s ease" }}
    >
      <GlassCard>
        <FormGrid container>
          <Grid container xs={12} lg={6}>
            <Grid item xs={12} m={1}>
              <FormControl fullWidth>
                <TextField
                  value={name}
                  onChange={handleNameChange}
                  label="Name"
                  required
                  error={isNameError}
                />
                <FormHelperText>What do your friends call you?</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} m={1}>
              <FormControl fullWidth>
                <TextField
                  value={email}
                  onChange={handleEmailChange}
                  label="Email"
                  required
                  error={isEmailError}
                />
                <FormHelperText>
                  Promise not to flood your inbox :)
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} m={1}>
              <FormControl fullWidth>
                <TextField
                  value={message}
                  onChange={handleMessageChange}
                  label="Message"
                  multiline
                  rows={4}
                  error={isMessageError}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12} m={1}>
              <TranslucentButton variant="contained" onClick={handleSubmit}>
                Submit
              </TranslucentButton>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              direction: "column",
            }}
            p={1}
          >
            <Tooltip title={"f20201677@pilani.bits-pilani.ac.in"} arrow>
              <img
                src={Image}
                alt="profile"
                style={{
                  width: "100%",
                  borderRadius: "5px",
                  opacity: 0.9,
                }}
              />
            </Tooltip>
          </Grid>
        </FormGrid>
      </GlassCard>
    </MainContainer>
  );
};

export default Contact;
