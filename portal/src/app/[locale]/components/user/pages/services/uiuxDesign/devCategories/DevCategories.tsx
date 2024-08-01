import React from "react";
import { Container, Grid } from "@mui/material";
import benefitimage from "../../../../../../../../../public/Group-26974-1-1 1.webp";
import { MainBox, MainImage, Typo1 } from "./styled";
import { TranslationAtom } from "@/components/TranslationAtom";
import { ListComponent } from "./data";
import {
  HeadParaBox,
  TypoBody1,
  TypoH3,
} from "../../videoProduction/bestCompany/styled";

const DevCategories = () => {
  return (
    <>
      <Container maxWidth="xl">
        <HeadParaBox>
          <TypoH3 variant="h4" color="initial">
            <TranslationAtom word="uiux:devCategories.heading" />
          </TypoH3>
          <TypoBody1 variant="body1" color="initial">
            <TranslationAtom word="uiux:devCategories.para" />
          </TypoBody1>
        </HeadParaBox>
      </Container>
      <MainBox>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <MainImage src={benefitimage} alt="image" />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Typo1 variant="body2" color="initial">
                <TranslationAtom word="uiux:devCategories.para" />
              </Typo1>
              <ListComponent />
            </Grid>
          </Grid>
        </Container>
      </MainBox>
    </>
  );
};

export default DevCategories;
