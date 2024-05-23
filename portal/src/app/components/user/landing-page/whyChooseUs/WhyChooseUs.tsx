"use client";
import {
  Box,
  styled,
  Grid,
  Container,
  Typography,
  Button,
} from "@mui/material";
import React from "react";

const NumberArray = [
  { number: "12k", text: "project done" },
  { number: "35k", text: "team members" },
  { number: "15k", text: "happy clients" },
  { number: "12+", text: "awards" },
];

const TopBox = styled(Box)(({ theme }) => ({
  borderRadius: "84px 88px 0px 0px",
  background: "#970089ff",
  height: "10rem",
  marginTop: "1.5rem",
}));
const TypoH2 = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: "#ffffffa3",
  fontFamily: "sans-serif",
}));
const TypoH6 = styled(Typography)(({ theme }) => ({
  color: "white",
  textTransform: "capitalize",
  fontFamily: "cursive",
}));

const WhyChooseUs = () => {
  return (
    <>
      <TopBox>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {NumberArray.map((item, index) => (
              <Grid
                key={index}
                item
                xs={6}
                sm={3}
                md={3}
                lg={3}
                xl={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <TypoH2 variant="h2" color="initial">
                    {item.number}
                  </TypoH2>
                  <TypoH6 variant="h6" color="initial">
                    {item.text}
                  </TypoH6>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </TopBox>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <Box>
              <Typography variant="h5" color="initial">
                Why Choose Us
              </Typography>
              <Typography variant="h3" color="initial">
                Unlock Revenue Growth For Your Business
              </Typography>
              <Typography variant="subtitle1" color="initial">
                We are 100+ professional software engineers with mor than 10
                years of experience in delivering sup erior pro Believe it
                because you've seen it.
              </Typography>
            </Box>
            <Button variant="outlined">view all more</Button>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}></Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default WhyChooseUs;
