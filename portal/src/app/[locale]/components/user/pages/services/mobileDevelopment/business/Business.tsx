import React from "react";
import { Container, Grid } from "@mui/material";
import { HeadTypo, HeadTypoH6, MainBox } from "./styled";
import { GridData, ParagraphComponent } from "./data";
import CustomCardsGrid from "./CustomCardsGrid";
import { TranslationAtom } from "@/components/TranslationAtom";

const Business = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <HeadTypoH6 variant="h6" gutterBottom>
            <TranslationAtom word="mobileDevelopment:business.heading" />
          </HeadTypoH6>
          <HeadTypo variant="h4" gutterBottom>
            <TranslationAtom word="mobileDevelopment:business.subHeading" />
          </HeadTypo>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <ParagraphComponent />
            </Grid>
            <CustomCardsGrid data={GridData} />
          </Grid>
        </Container>
      </MainBox>
    </>
  );
};

export default Business;
