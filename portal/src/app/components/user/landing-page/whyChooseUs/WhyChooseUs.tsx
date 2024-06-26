"use client";
import { Box, styled, Grid, Container, Typography, Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import NumberCounter from "../../utils/NumberCounter";
import { useTranslations } from 'next-intl';
import CheckIcon from "../../../../../../public/whychooseus2.png";
import whyChooseUSImage from "../../../../../../public/whychooseus1.png";
import i18next from "i18next";

const TopBox = styled(Box)(({ theme }) => ({
  borderRadius: "84px 88px 0px 0px",
  background: "#970089ff",
  height: "15rem",
  marginTop: "1.5rem",
  [theme.breakpoints.down("sm")]: {
    height: "23rem",
  },
}));

const TypoH2 = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: "#ffffffa3",
  fontFamily: "sans-serif",
  display: "flex",
}));

const TypoH6 = styled(Typography)(({ theme }) => ({
  color: "white",
  textTransform: "capitalize",
}));

const TypoWCUh5 = styled(Typography)(({ theme }) => ({
  background: "#f6c460ff",
  width: "230px",
  textAlign: "center",
  padding: "5px",
  borderRadius: "25px",
  fontWeight: 500,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const TypoWCUh3 = styled(Typography)(({ theme }) => ({
  padding: "1.5rem 0rem",
  color: "white",
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    fontSize: "2.5rem",
  },
}));

const TypoWCUBody1 = styled(Typography)(({ theme }) => ({
  color: "white",
  fontSize: "1.2rem",
  paddingBottom: "1.5rem",
  textAlign: "justify",
  paddingRight: "3rem",
  [theme.breakpoints.down("sm")]: {
    paddingRight: "0rem",
  },
}));

const PointsBody2 = styled(Typography)(({ theme }) => ({
  color: "white",
  textAlign: "justify",
  marginBottom: "0.5rem",
  fontSize: "0.79rem",
}));

const PointsTitleTypography = styled(Typography)(({ theme }) => ({
  color: "white",
  textTransform: "capitalize",
  fontSize: "1.8rem",
  padding: "0px",
  marginBottom: "0.7rem",
}));

const BottomBox = styled(Box)(({ theme }) => ({
  background: "#6907A8",
  paddingTop: "4rem",
  paddingBottom: "1rem",
  borderRadius: "84px 84px 0px 0px",
  position: "relative",
  bottom: "90px",
  marginBottom: "-65px",
  [theme.breakpoints.down("sm")]: {
    bottom: "80px",
    paddingBottom: "90px",
  },
}));

const CheckIconBox = styled(Box)(({ theme }) => ({
  display: "flex",
  columnGap: "15px",
}));

const HeadingParaBox = styled(Box)(({ theme }) => ({
  height: "460px",
}));

const PoinIconBox = styled(Box)(({ theme }) => ({
  paddingTop: "5px",
}));

const ImageBox = styled(Box)(({ theme }) => ({
  height: "460px",
  display: "flex",
  alignItems: "end",
  [theme.breakpoints.down("sm")]: {
    height: "360px",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const ViewAllBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const NumberCounterBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
}));

const PointsBox = styled(Box)(({ theme }) => ({
  height: "460px",
}));

const NumberGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const MainImage = styled(Image)(({ theme }) => ({
  width: "100%",
  height: "80%",
  objectFit: "contain",
  [theme.breakpoints.down("sm")]: {
    height: "100%",
  },
}));

const ButtonWCU = styled(Button)(({ theme }) => ({
  color: "white",
  textTransform: "capitalize",
  border: "1px solid #ffffff94",
  padding: "5px 25px",
  borderRadius: "25px",
  "&:hover": {
    border: "1px solid #ffffff94",
  },
}));

const WhyChooseUs = () => {
  const t = useTranslations('whyChooseUs');

  return (
    <>
      <TopBox>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <NumberGrid item xs={6} sm={3} md={3} lg={3} xl={3}>
              <NumberCounterBox>
                <TypoH2 variant="h2" color="initial">
                  <NumberCounter number={12000} />k
                </TypoH2>
                <TypoH6 variant="h6" color="initial">
                  {t('numberArray.0.text')}
                </TypoH6>
              </NumberCounterBox>
            </NumberGrid>
            <NumberGrid item xs={6} sm={3} md={3} lg={3} xl={3}>
              <NumberCounterBox>
                <TypoH2 variant="h2" color="initial">
                  <NumberCounter number={35000} />k
                </TypoH2>
                <TypoH6 variant="h6" color="initial">
                  {t('numberArray.1.text')}
                </TypoH6>
              </NumberCounterBox>
            </NumberGrid>
            <NumberGrid item xs={6} sm={3} md={3} lg={3} xl={3}>
              <NumberCounterBox>
                <TypoH2 variant="h2" color="initial">
                  <NumberCounter number={15000} />k
                </TypoH2>
                <TypoH6 variant="h6" color="initial">
                  {t('numberArray.2.text')}
                </TypoH6>
              </NumberCounterBox>
            </NumberGrid>
            <NumberGrid item xs={6} sm={3} md={3} lg={3} xl={3}>
              <NumberCounterBox>
                <TypoH2 variant="h2" color="initial">
                  <NumberCounter number={12} />+
                </TypoH2>
                <TypoH6 variant="h6" color="initial">
                  {t('numberArray.3.text')}
                </TypoH6>
              </NumberCounterBox>
            </NumberGrid>
          </Grid>
        </Container>
      </TopBox>
      <BottomBox>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
              <HeadingParaBox>
                <TypoWCUh5 variant="h5" color="initial">
                  {t('heading')}
                </TypoWCUh5>
                <TypoWCUh3 variant="h3" color="initial">
                  {t('subheading')}
                </TypoWCUh3>
                <TypoWCUBody1 variant="subtitle1" color="initial">
                  {t('bodyText')}
                </TypoWCUBody1>
                <ViewAllBox>
                  <ButtonWCU variant="outlined">View All</ButtonWCU>
                </ViewAllBox>
              </HeadingParaBox>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
              <ImageBox>
                <MainImage src={whyChooseUSImage} alt="image" />
              </ImageBox>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
              <PointsBox>
                <CheckIconBox>
                  <PoinIconBox>
                    <Image src={CheckIcon} alt="image" height={25} width={25} />
                  </PoinIconBox>
                  <Box>
                    <PointsTitleTypography variant="h4" color="initial">
                      {t('pointsArray.0.title')}
                    </PointsTitleTypography>
                    <PointsBody2 variant="body2" color="initial">
                      {t('pointsArray.0.text')}
                    </PointsBody2>
                  </Box>
                </CheckIconBox>
                <CheckIconBox>
                  <PoinIconBox>
                    <Image src={CheckIcon} alt="image" height={25} width={25} />
                  </PoinIconBox>
                  <Box>
                    <PointsTitleTypography variant="h4" color="initial">
                      {t('pointsArray.1.title')}
                    </PointsTitleTypography>
                    <PointsBody2 variant="body2" color="initial">
                      {t('pointsArray.1.text')}
                    </PointsBody2>
                  </Box>
                </CheckIconBox>
                <CheckIconBox>
                  <PoinIconBox>
                    <Image src={CheckIcon} alt="image" height={25} width={25} />
                  </PoinIconBox>
                  <Box>
                    <PointsTitleTypography variant="h4" color="initial">
                      {t('pointsArray.2.title')}
                    </PointsTitleTypography>
                    <PointsBody2 variant="body2" color="initial">
                      {t('pointsArray.2.text')}
                    </PointsBody2>
                  </Box>
                </CheckIconBox>
                <CheckIconBox>
                  <PoinIconBox>
                    <Image src={CheckIcon} alt="image" height={25} width={25} />
                  </PoinIconBox>
                  <Box>
                    <PointsTitleTypography variant="h4" color="initial">
                      {t('pointsArray.3.title')}
                    </PointsTitleTypography>
                    <PointsBody2 variant="body2" color="initial">
                      {t('pointsArray.3.text')}
                    </PointsBody2>
                  </Box>
                </CheckIconBox>
              </PointsBox>
            </Grid>
          </Grid>
        </Container>
      </BottomBox>
    </>
  );
};

export default WhyChooseUs;
