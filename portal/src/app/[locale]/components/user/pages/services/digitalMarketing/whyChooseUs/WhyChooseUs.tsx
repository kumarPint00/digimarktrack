import React from "react";
import { MainBox, ParaTypo, Typographyh3, Typographyh5 } from "./styled";
import { Container, Grid } from "@mui/material";
import CustomCardsGrid from "../../mobileDevelopment/business/CustomCardsGrid";
import { GridData } from "../../mobileDevelopment/business/data";
import { TranslationAtom } from "@/components/TranslationAtom";

const WhyChooseUs = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <Typographyh5 variant="h5" color="initial" gutterBottom>
            <TranslationAtom word="digitalMarketing:whyChooseUs.heading" />
          </Typographyh5>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Typographyh3 variant="h3" color="initial" gutterBottom>
                <TranslationAtom word="digitalMarketing:whyChooseUs.subHeading" />
              </Typographyh3>
              <ParaTypo variant="subtitle1" color="initial">
                <TranslationAtom word="digitalMarketing:whyChooseUs.paragraph" />
              </ParaTypo>
            </Grid>
            <CustomCardsGrid data={GridData} />
          </Grid>
        </Container>
      </MainBox>
    </>
  );
};

export default WhyChooseUs;
