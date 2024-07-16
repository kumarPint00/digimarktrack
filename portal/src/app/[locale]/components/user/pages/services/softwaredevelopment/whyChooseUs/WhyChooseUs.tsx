import React from "react";
import {
  HeadContentBox,
  MainBox,
  TypoBody1,
  TypoH5,
  Typographyh5,
} from "./styled";
import { Container, Grid } from "@mui/material";
import { whyChooseContent } from "./data";
import { GridComponent } from "../../seo/whyChooseUs/data";

const WhyChooseUs = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <Typographyh5 variant="h5" color="initial" gutterBottom>
            WHY CHOOSE US
          </Typographyh5>
          {whyChooseContent.map((item, index) => (
            <HeadContentBox key={index}>
              <TypoH5 variant="h5" color="initial">
                {item.heading}
              </TypoH5>
              <TypoBody1 variant="body1" color="initial">
                {item.content}
              </TypoBody1>
            </HeadContentBox>
          ))}
          <Grid container spacing={1}>
            <GridComponent />
          </Grid>
        </Container>
      </MainBox>
    </>
  );
};

export default WhyChooseUs;
