import React from "react";
import { Box, Container, Grid } from "@mui/material";
import benefitimage from "../../../../../../../../../public/devcategorymobile.webp";
import { MainBox, MainImage, Typo1, Typographyh5 } from "./styled";
import { TranslationAtom } from "@/components/TranslationAtom";
import { ListAndIconComponent } from "./data";

const DevCategories = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typographyh5 variant="h6" color="initial" gutterBottom>
          <TranslationAtom word="mobileDevelopment:devCategories.heading" />
        </Typographyh5>
      </Box>
      <MainBox>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <MainImage src={benefitimage} alt="image" />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Typo1 variant="body2" color="initial">
                <TranslationAtom word="mobileDevelopment:devCategories.para" />
              </Typo1>
              <ListAndIconComponent />
            </Grid>
          </Grid>
        </Container>
      </MainBox>
    </>
  );
};

export default DevCategories;