import React, { useState, useEffect } from "react";
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
  styled,
  Box,
} from "@mui/material";

import JS from "../assets/JavaScript-logo.png";
import TS from "../assets/Typescript_logo_2020.svg";
import SQL from "../assets/Sql_data_base_with_logo.png";
import C from "../assets/ISO_C++_Logo.svg";
import JAVA from "../assets/java-vertical.svg";
import SOL from "../assets/Solidity_logo.svg";
import PY from "../assets/python-logo-only.png";

const MainContainer = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(6),
  textAlign: "center",
}));

const AvatarContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "160px",
  height: "160px",
  borderRadius: "50%",
  backgroundColor: "#fff",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
  margin: "auto",

  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(1),
    width: "160px",
    height: "160px",
  },
}));

const AvatarStyle = styled(Avatar)(({ theme }) => ({
  width: "155px",
  height: "155px",

  [theme.breakpoints.down("md")]: {
    width: "155px",
    height: "155px",
  },
}));

const GlassCard = styled(Card)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
  backdropFilter: "blur(5px)",
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  margin: theme.spacing(1),
  color: "#3a4f58",

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(1),
    margin: theme.spacing(2),
    marginBottom: theme.spacing(0),
  },
}));

const LevelBar = ({ level }) => {
  let levelColor;
  let levelPercentage;

  switch (level) {
    case "Beginner":
      levelColor = "red";
      levelPercentage = 25;
      break;
    case "Intermediary":
      levelColor = "orange";
      levelPercentage = 50;
      break;
    case "Knowledgeable":
      levelColor = "yellow";
      levelPercentage = 75;
      break;
    case "Expert":
      levelColor = "green";
      levelPercentage = 90;
      break;
    default:
      levelColor = "gray";
      levelPercentage = 0;
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0)",
          height: "10px",
          borderRadius: "4px",
          boxShadow: "inset 0px 1px 4px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Box
          sx={{
            backgroundColor: levelColor,
            height: "100%",
            width: `${levelPercentage}%`,
            borderRadius: "4px",
            boxShadow: "inset 0px 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        />
      </Box>
    </Box>
  );
};

const skillsData = [
  {
    language: "TypeScript",
    level: "Knowledgeable",
    title: "Backend Development",
    description: "SQL integration | Error Handeling",
    image: TS,
  },
  {
    language: "JavaScript",
    level: "Expert",
    title: "Fullstack Development",
    description: "NodeJS | ReactJS | ExpressJS",
    image: JS,
  },
  {
    language: "SQL",
    level: "Knowledgeable",
    title: "Database Management",
    description: "Transaction Logging | Data Handeling",
    image: SQL,
  },
  {
    language: "Python",
    level: "Knowledgeable",
    title: "Fullstack Development",
    description: "DJANGO | REST",
    image: PY,
  },
  {
    language: "C++",
    level: "Expert",
    title: "Algorithm Design and Analysis",
    description: "Problem Solving | Academic Projects",
    image: C,
  },
  {
    language: "Java",
    level: "Intermediary",
    title: "Application Development",
    description: "Object Oriented Programming",
    image: JAVA,
  },
  {
    language: "Solidity",
    level: "Beginner",
    title: "Smart Contract Development",
    description: "Learning Purpose",
    image: SOL,
  },
];

const Skills = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <MainContainer
      container
      justifyContent="center"
      spacing={2}
      style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 1s ease" }}
    >
      {skillsData.map((skill, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <GlassCard>
            <Grid container alignItems="center" justifyContent="center">
              <Grid item xs={12}>
                <AvatarContainer>
                  <AvatarStyle
                    src={skill.image}
                    alt={`${skill.language} Logo`}
                  />
                </AvatarContainer>
              </Grid>
              <Grid item xs={12}>
                <CardContent>
                  <Typography variant="h6" mt={1}>
                    {skill.language}
                  </Typography>
                  <Typography variant="body1">{skill.title}</Typography>
                  <Typography variant="body2" mb={2}>
                    {skill.description}
                  </Typography>
                  <LevelBar level={skill.level} />
                </CardContent>
              </Grid>
            </Grid>
          </GlassCard>
        </Grid>
      ))}
    </MainContainer>
  );
};

export default Skills;
