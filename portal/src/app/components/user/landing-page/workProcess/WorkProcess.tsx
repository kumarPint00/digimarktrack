"use client";
import { Box, Container, Typography, styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import workProcessImg from "../../../../../../public/workProcessImg.webp";

const MainBox = styled(Box)(({ theme }) => ({
  padding: "1rem 0rem",
  marginTop: "0rem",
}));

const HeadingBox = styled(Box)(({ theme }) => ({
  textAlign: "-webkit-center" as any,
}));

const Typographyh5 = styled(Typography)(({ theme }) => ({
  backgroundColor: "#932889",
  color: "white",
  padding: "5px 0px",
  textAlign: "center",
  width: "300px",
  borderRadius: "25px",
  // fontFamily: "cursive",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const Typographyh3 = styled(Typography)(({ theme }) => ({
  // fontFamily: "cursive",
  [theme.breakpoints.down("sm")]: {
   fontSize:"2.5rem"
  },
}));

const WorkProcess = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <HeadingBox>
            <Typographyh5 variant="h5" color="initial" gutterBottom>
              Work Process
            </Typographyh5>
            <Typographyh3 variant="h3" color="initial" gutterBottom>
              Our Work Process
            </Typographyh3>
          </HeadingBox>
        </Container>
        <Image
          src={workProcessImg}
          alt="image"
          style={{ height: "100%", width: "100%" }}
        />
      </MainBox>
    </>
  );
};

export default WorkProcess;
