import React from "react";
import {
  HeadContentBox,
  MainBox,
  TypoBody1,
  TypoH5,
  Typographyh5,
} from "./styled";
import {  Container, Grid } from "@mui/material";
import { GridComponent } from "../../seo/whyChooseUs/data";

const WhyChooseUs = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <Typographyh5 variant="h5" color="initial" gutterBottom>
            WHY CHOOSE US
          </Typographyh5>
          <HeadContentBox>
            <TypoH5 variant="h5" color="initial">
              IT Consultation from 360 Solution
            </TypoH5>
            <TypoBody1 variant="body1" color="initial">
              At 360 Solution, we have a different approach when it comes to
              helping businesses with their technology needs. We believe in
              creating solutions that not only solve the problem but also add
              value to the business. With our services, you can expect top-notch
              expertise in the field of technology and IT consulting that will
              help your business grow and succeed.
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
