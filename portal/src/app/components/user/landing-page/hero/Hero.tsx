"use client";
import { Box, Button, styled, Typography } from "@mui/material";
import React, { FC } from "react";
import { useTranslations } from 'next-intl';

const MainBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url("/Mask group.png")`,
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100vh",
  width: "100%",
  [theme.breakpoints.down('sm')]: {
    backgroundPosition: "inherit",
  },
}));

const HeroText = styled(Box)(({ theme }) => ({
  width: "500px",
  position: "absolute",
  right: "50px",
  bottom: "50px",
  [theme.breakpoints.down('sm')]: {
    width: "357px",
    right: "9px",
    bottom: "77px",
  },
}));

const HeroTypoH1 = styled(Typography)(({ theme }) => ({
  fontSize: "3rem",
  textAlign: "center",
  color: "white",
}));

const HeroTypobody2 = styled(Typography)(({ theme }) => ({
  color: "white",
  textAlign: "justify",
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
  fontSize: "0.8rem",
}));

const HeroButtonBox = styled(Box)(({ theme }) => ({
  textAlign: "right",
  padding: "10px 24px",
}));

const HeroButton = styled(Button)(({ theme }) => ({
  border: "1px solid white",
  borderRadius: "20px",
  color: "white",
  textTransform: "capitalize",
  padding: "5px 15px",
}));

export interface HeroProps {
  text?: string;
}

const Hero: FC<HeroProps> = (props) => {
  const t = useTranslations('hero');

  return (
    <>
      <MainBox>
        <HeroText>
          <HeroTypoH1 variant="h1" color="initial" gutterBottom>
            {t('title')}
          </HeroTypoH1>
          <HeroTypobody2 variant="body2" color="initial" gutterBottom>
            {t('description')}
          </HeroTypobody2>
          <HeroButtonBox>
            <HeroButton>{t('button')}</HeroButton>
          </HeroButtonBox>
        </HeroText>
      </MainBox>
    </>
  );
};

export default Hero;
