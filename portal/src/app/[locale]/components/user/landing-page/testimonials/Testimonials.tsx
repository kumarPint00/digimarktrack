import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { HeadingBox, MainBox, Typographyh3, Typographyh5 } from "./styled";
import TestimonialCards from "./data";
import { TranslationAtom } from "@/components/TranslationAtom";

const Testimonials = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <HeadingBox>
            <Typographyh5 variant="h5" color="initial" gutterBottom>
              <TranslationAtom word="landingPage:testimonials.mainHeading" />
            </Typographyh5>
            <Typographyh3 variant="h3" color="initial" gutterBottom>
              <TranslationAtom word="landingPage:testimonials.heading" />
            </Typographyh3>
          </HeadingBox>
          <Box>
            <Grid container spacing={2}>
              <TestimonialCards />
            </Grid>
          </Box>
        </Container>
      </MainBox>
    </>
  );
};

export default Testimonials;
