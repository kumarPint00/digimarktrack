import React from "react";
import { Container, Grid } from "@mui/material";
import benefitimage from "../../../../../../../../../public/benefitimage.webp";
import { MainBox, MainImage, Typo1 } from "./styled";
import { TranslationAtom } from "@/components/TranslationAtom";
import { DevCategoriesListComponent } from "./data";

const DevCategories = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <MainImage src={benefitimage} alt="image" />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Typo1 variant="body2" color="initial">
                <TranslationAtom word="webDevelopment:devCategories.para" />
              </Typo1>
              <DevCategoriesListComponent />
            </Grid>
          </Grid>
        </Container>
      </MainBox>
    </>
  );
};

export default DevCategories;
