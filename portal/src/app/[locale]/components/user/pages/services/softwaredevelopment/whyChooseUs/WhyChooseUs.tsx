import React from "react";
import { MainBox, Typographyh5 } from "./styled";
import { Container, Grid } from "@mui/material";
import { GridComponent } from "../../seo/whyChooseUs/data";
import { TranslationAtom } from "@/components/TranslationAtom";
import { WhyChooseContentComponent } from "./data";

const WhyChooseUs = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <Typographyh5 variant="h5" color="initial" gutterBottom>
            <TranslationAtom word="softwareDevelopment:whyChooseUs.heading" />
          </Typographyh5>
          <WhyChooseContentComponent />
          <Grid container spacing={1}>
            <GridComponent />
          </Grid>
        </Container>
      </MainBox>
    </>
  );
};

export default WhyChooseUs;
