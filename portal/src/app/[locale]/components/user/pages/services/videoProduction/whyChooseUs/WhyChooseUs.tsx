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
              Leading Video Production Services
            </TypoH5>
            <TypoBody1 variant="body1" color="initial">
              Our Creative Directors ensure thorough quality checks before any
              deliverable (script, voice over, renders, animation, etc.) goes
              out to you.
            </TypoBody1>
            <TypoBody1 variant="body1" color="initial">
              Our packages include end to end service which means client only
              needs to tell us about their product, service and our team takes
              care of the rest.
            </TypoBody1>
            <TypoBody1 variant="body1" color="initial">
              Every single project is managed by a highly skilled and
              experienced Creative Director to ensure a great concept, quality
              and timely delivery.
            </TypoBody1>
            <TypoBody1 variant="body1" color="initial">
              We use advanced project planning software to ensure that you get
              your video delivered in the time committed by us.
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
