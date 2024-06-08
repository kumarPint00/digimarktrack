"use client";
import { Box, Button, ListItemButton, Typography, styled } from "@mui/material";
import Image from "next/image";

export const NavlinksButton = styled(Button)(({ theme }) => ({
  textTransform: "capitalize",
  color: "black",
  fontWeight: 600,
  cursor: "pointer",
}));
export const NavIconButton = styled(Button)(({ theme }) => ({
  textTransform: "capitalize",
  color: "white",
  outline: "none",
  margin: "0px 10px",
  border: "1px solid #932889",
  "&:hover": {
    border: "1px solid #932889",
  },
  borderRadius: "25px",
  padding: "5px 15px",
}));
export const NavlinksBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
  backgroundColor: "white",
  padding: "10px 45px",
  border: "1px solid white",
  borderRadius: "30px",
  position: "absolute",
  right: "27%",
  zIndex: "-1",
}));
export const NaviconbuttonBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
  backgroundColor: "black",
  padding: "12px 35px",
  border: "1px solid black",
  borderRadius: "30px",
}));
export const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
}));
export const DrawerMainBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
}));
export const DrawerTypoh6 = styled(Typography)(({ theme }) => ({
  my: 2,
}));
export const DrawerListItemButton = styled(ListItemButton)(({ theme }) => ({
  textAlign: "center",
}));

export const ButtonIconImage = styled(Image)(({ theme }) => ({
  marginLeft: "5px",
}));

export const drawerWidth = 240;
