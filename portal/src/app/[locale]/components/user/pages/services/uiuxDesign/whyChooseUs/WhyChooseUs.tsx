import React from "react";
import { HeadContentBox, MainBox, TypoBody1, TypoH5 } from "./styled";
import { Container, Grid } from "@mui/material";
import { GridComponent } from "../../seo/whyChooseUs/data";
import { TranslationAtom } from "@/components/TranslationAtom";

const WhyChooseUs = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <HeadContentBox>
            <TypoH5 variant="h5" color="initial">
              <TranslationAtom word="uiux:whyChooseUs.heading" />
            </TypoH5>
            <TypoBody1 variant="body1" color="initial">
              <TranslationAtom word="uiux:whyChooseUs.para" />
            </TypoBody1>
          </HeadContentBox>
          <Grid container spacing={1}>
            <GridComponent />
          </Grid>
        </Container>
      </MainBox>
    </>
  );
};

export default WhyChooseUs;
