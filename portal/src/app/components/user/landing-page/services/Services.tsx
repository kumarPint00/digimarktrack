"use client";
import { Box, Typography, styled, Container } from "@mui/material";
import React from "react";
import Slider from "./Slider";
import Link from "next/link";
import { useTranslations } from 'next-intl';

const Typographyh5 = styled(Typography)(({ theme }) => ({
  backgroundColor: "#932889",
  color: "white",
  padding: "5px 0px",
  textAlign: "center",
  width: "300px",
  borderRadius: "25px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
const Typographyh3 = styled(Typography)(({ theme }) => ({}));
const Typographyh5Link = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  margin: "1rem 0rem",
  fontSize: "1.2rem",
}));
const MainBox = styled(Box)(({ theme }) => ({
  padding: "1rem 0rem",
}));
const HeadingBox = styled(Box)(({ theme }) => ({
  textAlign: "-webkit-center" as any,
}));
const KnowMoreLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  fontSize: "0.5rem",
}));

const Services = () => {
  const t = useTranslations('services');

  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <HeadingBox>
            <Typographyh5 variant="h5" color="initial" gutterBottom>
              {t('heading')}
            </Typographyh5>
            <Typographyh3 variant="h3" color="initial" gutterBottom>
              {t('subheading')}
            </Typographyh3>
          </HeadingBox>
          <Slider />
          <Typographyh5Link variant="h5" color="initial">
            {t('linkText').split('Click here').map((text, index) => (
              <React.Fragment key={index}>
                {text}
                {index === 0 && (
                  <KnowMoreLink href="/viewmore">{t('linkText').split(' ').pop()}</KnowMoreLink>
                )}
              </React.Fragment>
            ))}
          </Typographyh5Link>
        </Container>
      </MainBox>
    </>
  );
};

export default Services;
