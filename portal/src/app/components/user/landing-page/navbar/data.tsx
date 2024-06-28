"use client";
export const navItems = ["Home", "Services", "Career", "Blog", "About Us"];

export const navButtonIcon = [
  { text: "contact us", icon: "/contact-uswebp.webp" },
  { text: "let's talk", icon: "/Lets talkwebp.webp" },
];

export const navLinks: any = {
  Home: "/",
  Services: "/components/user/pages/services",
  Career: "/components/user/pages/career",
  Blog: "/components/user/pages/blog",
  "About Us": "/components/user/pages/aboutus",
};

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";
import { CustomMenuItem } from "./styled";

export const ServiceMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorE2, setAnchorE2] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorE2);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setAnchorE2(null);
  };
  return (
    <>
      <Button sx={{}}>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            textTransform: "capitalize",
            fontSize: "15px",
            fontWeight: 600,
          }}
          href="/"
        >
          Home
        </Link>
      </Button>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          color: "black",
          textTransform: "capitalize",
          fontSize: "15px",
          fontWeight: 600,
        }}
      >
        Services
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link
          style={{ textDecoration: "none" }}
          href="/components/user/pages/services/webDevelopment"
        >
          <CustomMenuItem onClick={handleClose}>Web Development</CustomMenuItem>
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          href="/components/user/pages/services/mobileDevelopment"
        >
          <CustomMenuItem onClick={handleClose}>
            Mobile Development
          </CustomMenuItem>
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          href="/components/user/pages/services/digitalMarketing"
        >
          <CustomMenuItem onClick={handleClose}>
            Digital Marketing
          </CustomMenuItem>
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          href="/components/user/pages/services/socialMediaMarketing"
        >
          <CustomMenuItem onClick={handleClose}>
            Social Media Marketing
          </CustomMenuItem>
        </Link>
        <CustomMenuItem onClick={handleClose}>
          Reputation Management
        </CustomMenuItem>
      </Menu>
      <Button
        id="basic-button"
        aria-controls={open2 ? "basic-menu2" : undefined}
        aria-haspopup="true"
        aria-expanded={open2 ? "true" : undefined}
        onClick={handleClick2}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          color: "black",
          textTransform: "capitalize",
          fontSize: "15px",
          fontWeight: 600,
        }}
      >
        Career
      </Button>
      <Menu
        id="basic-menu2"
        anchorEl={anchorE2}
        open={open2}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link
          style={{ textDecoration: "none" }}
          href="/components/user/pages/services/webDevelopment"
        >
          <CustomMenuItem onClick={handleClose}>Career</CustomMenuItem>
        </Link>
        <CustomMenuItem onClick={handleClose}>Career</CustomMenuItem>
        <CustomMenuItem onClick={handleClose}>Career</CustomMenuItem>
        <CustomMenuItem onClick={handleClose}>Career</CustomMenuItem>
        <CustomMenuItem onClick={handleClose}>Career</CustomMenuItem>
      </Menu>
    </>
  );
};
