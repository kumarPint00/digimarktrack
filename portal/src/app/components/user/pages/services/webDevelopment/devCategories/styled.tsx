"use client";
import { Box, Typography, styled } from "@mui/material";
import Image from "next/image";

export const MainBox = styled(Box)(({ theme }) => ({
  marginTop: "2.5rem",
  backgroundColor: "#0c1f2b",
  borderRadius:"50px 50px 0px 0px"
}));
export const IconBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  columnGap: "1.5rem",
  margin: "1rem 0",
}));
export const Typo1 = styled(Typography)(({ theme }) => ({
  fontSize: "1.4rem",
  color: "white",
  margin: "3.5rem 0rem",
}));
export const Typo2 = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  color: "white",
}));

export const MainImage = styled(Image)(({ theme }) => ({
    width: "500px",
    height: "521px",
    objectFit: "contain",
    [theme.breakpoints.down("sm")]: {
      height: "400px",
      width:"350px"
    },
  }));
