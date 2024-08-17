"use client";
import ContactAndChat from "@/components/ContactAndChat";

export const navItems = [
  "Home",
  "Web Development",
  "Mobile Development",
  "Digital Marketing",
  "Social Media Marketing",
  "Reputation Management",
  "SEO Management",
  "E-Commerce",
  "Graphic Design",
  "Software Development",
  "IT Consulting",
  "Content Writing",
  "Video Production",
  "UI/UX",
  "Career",
];

export const useNavButtonIcon = () => {
  const { handleWhatsappClick, handlePhoneClick } = ContactAndChat();
  const { t } = useTranslation();
  return [
    {
      text: t("navbar:navContact"),
      icon: "/contact-uswebp.webp",
      click: handlePhoneClick,
    },
    {
      text: t("navbar:navTalk"),
      icon: "/Lets talkwebp.webp",
      click: handleWhatsappClick,
    },
  ];
};

export const navLinks: any = {
  Home: "/",
  "Web Development": "/webDevelopment",
  "Mobile Development": "/mobileDevelopment",
  "Digital Marketing": "/digitalMarketing",
  "Social Media Marketing": "/socialMedia",
  "Reputation Management": "/reputationManagement",
  "SEO Management": "/seoManagement",
  "E-Commerce": "/eCommerce",
  "Graphic Design": "/graphicDesign",
  "Software Development": "/softwareDevelopment",
  "IT Consulting": "/itConsulting",
  "Content Writing": "/contentWriting",
  "Video Production": "/videoProduction",
  "UI/UX": "/uiuxDesign",
  Career: "/career",
};

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";
import { CustomMenuItem, NavigationLinkTag } from "./styled";
import LanguageChanger from "../../../../../../components/LanguageChanger";
import { useTranslation } from "react-i18next";
import { TranslationAtom } from "@/components/TranslationAtom";

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

  const { t } = useTranslation();
  return (
    <>
      <Button>
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
          {t("navbar:navHome")}
        </Link>
      </Button>
      <Button
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          color: "black",
          textTransform: "capitalize",
          fontSize: "15px",
          fontWeight: 600,
        }}
      >
        {t("navbar:navServices")}
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
        <NavigationLinkTag href="/webDevelopment">
          <CustomMenuItem onClick={handleClose}>
            <TranslationAtom word="navbar:serviceLinks.link1" />
          </CustomMenuItem>
        </NavigationLinkTag>
        <NavigationLinkTag href="/mobileDevelopment">
          <CustomMenuItem onClick={handleClose}>
            <TranslationAtom word="navbar:serviceLinks.link2" />
          </CustomMenuItem>
        </NavigationLinkTag>
        <NavigationLinkTag href="/digitalMarketing">
          <CustomMenuItem onClick={handleClose}>
            <TranslationAtom word="navbar:serviceLinks.link3" />
          </CustomMenuItem>
        </NavigationLinkTag>
        <NavigationLinkTag href="/socialMedia">
          <CustomMenuItem onClick={handleClose}>
            <TranslationAtom word="navbar:serviceLinks.link4" />
          </CustomMenuItem>
        </NavigationLinkTag>
        <NavigationLinkTag href="/reputationManagement">
          <CustomMenuItem onClick={handleClose}>
            <TranslationAtom word="navbar:serviceLinks.link5" />
          </CustomMenuItem>
        </NavigationLinkTag>
        <NavigationLinkTag href="/eCommerce">
          <CustomMenuItem onClick={handleClose}>
            <TranslationAtom word="navbar:serviceLinks.link6" />
          </CustomMenuItem>
        </NavigationLinkTag>
        <NavigationLinkTag href="/seoManagement">
          <CustomMenuItem onClick={handleClose}>
            <TranslationAtom word="navbar:serviceLinks.link7" />
          </CustomMenuItem>
        </NavigationLinkTag>
        <NavigationLinkTag href="/graphicDesign">
          <CustomMenuItem onClick={handleClose}>
            <TranslationAtom word="navbar:serviceLinks.link8" />
          </CustomMenuItem>
        </NavigationLinkTag>
        <NavigationLinkTag href="/softwareDevelopment">
          <CustomMenuItem onClick={handleClose}>
            <TranslationAtom word="navbar:serviceLinks.link9" />
          </CustomMenuItem>
        </NavigationLinkTag>
        <NavigationLinkTag href="/itConsulting">
          <CustomMenuItem onClick={handleClose}>
            <TranslationAtom word="navbar:serviceLinks.link10" />
          </CustomMenuItem>
        </NavigationLinkTag>
        <NavigationLinkTag href="/contentWriting">
          <CustomMenuItem onClick={handleClose}>
            <TranslationAtom word="navbar:serviceLinks.link11" />
          </CustomMenuItem>
        </NavigationLinkTag>
        <NavigationLinkTag href="/videoProduction">
          <CustomMenuItem onClick={handleClose}>
            <TranslationAtom word="navbar:serviceLinks.link12" />
          </CustomMenuItem>
        </NavigationLinkTag>
        <NavigationLinkTag href="/uiuxDesign">
          <CustomMenuItem onClick={handleClose}>
            <TranslationAtom word="navbar:serviceLinks.link13" />
          </CustomMenuItem>
        </NavigationLinkTag>
      </Menu>
      <Button
        id="basic-button"
        aria-controls={open2 ? "basic-menu2" : undefined}
        aria-haspopup="true"
        aria-expanded={open2 ? "true" : undefined}
        onClick={handleClick2}
        sx={{
          color: "black",
          textTransform: "capitalize",
          fontSize: "15px",
          fontWeight: 600,
        }}
      >
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            textTransform: "capitalize",
            fontSize: "15px",
            fontWeight: 600,
          }}
          href="/career"
        >
          {t("navbar:navCareer")}
        </Link>
      </Button>
    </>
  );
};
