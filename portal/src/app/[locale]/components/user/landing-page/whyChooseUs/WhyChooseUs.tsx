import { Grid, Container } from "@mui/material";
import React from "react";
import whyChooseUSImage from "../../../../../../../public/whychooseus1webp.webp";
import {
  BottomBox,
  ButtonWCU,
  HeadingParaBox,
  ImageBox,
  MainImage,
  PointsBox,
  TopBox,
  TypoWCUBody1,
  TypoWCUh3,
  TypoWCUh5,
  ViewAllBox,
} from "./styled";
import { CounterNumberComponent, PointsComponent } from "./data";
import { TranslationAtom } from "@/components/TranslationAtom";

const WhyChooseUs = () => {
  return (
    <>
      <TopBox>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <CounterNumberComponent />
          </Grid>
        </Container>
      </TopBox>
      <BottomBox>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
              <HeadingParaBox>
                <TypoWCUh5 variant="h5" color="initial">
                  <TranslationAtom word="landingPage:whyChooseUs.mainHeading" />
                </TypoWCUh5>
                <TypoWCUh3 variant="h3" color="initial">
                  <TranslationAtom word="landingPage:whyChooseUs.heading" />
                </TypoWCUh3>
                <TypoWCUBody1 variant="subtitle1" color="initial">
                  <TranslationAtom word="landingPage:whyChooseUs.para" />
                </TypoWCUBody1>
                <ViewAllBox>
                  <ButtonWCU variant="outlined">
                    <TranslationAtom word="landingPage:whyChooseUs.button" />
                  </ButtonWCU>
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
                <PointsComponent />
              </PointsBox>
            </Grid>
          </Grid>
        </Container>
      </BottomBox>
    </>
  );
};

export default WhyChooseUs;
