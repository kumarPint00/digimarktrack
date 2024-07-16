import React from "react";
import {
  HeadContentBox,
  MainBox,
  TypoBody1,
  TypoH5,
  Typographyh5,
} from "./styled";
import { Container, Grid } from "@mui/material";
import { GridComponent } from "./data";

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
              Boost Your Business with the Best SEO Agency.
            </TypoH5>
            <TypoBody1 variant="body1" color="initial">
              We ensure the best SEO Services to build your brand!
              <br />
              360 solution quickly fixes your issues with strategies that work
              across your organization and support your project’s objectives. No
              matter what you are up to, be it growing, transforming,
              consolidating, or centralizing, we are the support for you that
              you can count on anytime. 
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
