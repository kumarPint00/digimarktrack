"use client";
import { Box, Grid, Typography, styled } from "@mui/material";

export const MainBox = styled(Box)(({ theme }) => ({
    padding: "1rem 0rem",
  }));
  export const AboutUsBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));
  export const Typographyh5 = styled(Typography)(({ theme }) => ({
    backgroundColor: "#932889",
    color: "white",
    padding: "5px 0px",
    textAlign: "center",
    width: "50%",
    borderRadius: "25px",
  
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  }));
  export const Typographyh3 = styled(Typography)(({ theme }) => ({
    textTransform: "capitalize",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  }));
  export const Typographybody2 = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
      textAlign: "justify",
    },
  }));
  export const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
  }));
  export const IconGrid = styled(Grid)(({ theme }) => ({
    padding: "1rem 0rem",
  }));
  export const IconTypography = styled(Typography)(({ theme }) => ({
    fontSize: "large",
    fontWeight: 600,
    marginLeft: "10px",
  }));
  export const CheckIconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    marginBottom: "5px",
  }));
  export const CheckIconTypography = styled(Typography)(({ theme }) => ({
    marginLeft: "10px",
    marginBottom: "0px",
  }));
  export const ExpTypography = styled(Typography)(({ theme }) => ({
    margin: "0",
    padding: "10px 10px",
    fontSize: "12px",
    color: "white",
    backgroundColor: "#932889",
    textAlign: "center",
    writingMode: "vertical-lr",
    borderRadius: "25px",
    position: "absolute",
    right: "40rem",
    top: "40.4rem",
    height: "215px",
    border: "3px solid white",
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      top: "-15px",
      right: "0rem",
      marginBottom: "-230px",
    },
  }));
  