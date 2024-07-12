import React from "react";
import { Container, Grid } from "@mui/material";
import { HeadingBox, MainBox, Typographyh3, Typographyh5 } from "./styled";
import { TranslationAtom } from "@/components/TranslationAtom";
import { CardTextComponent } from "./data";

const WhyChoose360 = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <HeadingBox>
            <Typographyh5 variant="h5" color="initial" gutterBottom>
              <TranslationAtom word="webDevelopment:whyChooseUs.heading" />
            </Typographyh5>
            <Typographyh3 variant="h3" color="initial" gutterBottom>
              <TranslationAtom word="webDevelopment:whyChooseUs.subHeading" />
            </Typographyh3>
          </HeadingBox>
          <Grid container spacing={3}>
            <CardTextComponent />
          </Grid>
        </Container>
      </MainBox>
    </>
  );
};

export default WhyChoose360;
