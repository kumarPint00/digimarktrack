import React from "react";
import {
  HeadContentBox,
  MainBox,
  TypoBody1,
  TypoH5,
  Typographyh5,
} from "./styled";
import { Container, Grid } from "@mui/material";
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
              Leading Content Writing Services
            </TypoH5>
            <TypoBody1 variant="body1" color="initial">
              360 Solution. has successfully spent years in the content writing
              industry. We have a track record of more than 350+ happy
              customers. Our professional content writing services focus on
              accomplishing the maximum reach of your apps and products. Hence,
              these services are enriched with impeccable and intriguing topics,
              subtopics, headings, subheadings, quotations, information,
              descriptions, and visuals. 
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
