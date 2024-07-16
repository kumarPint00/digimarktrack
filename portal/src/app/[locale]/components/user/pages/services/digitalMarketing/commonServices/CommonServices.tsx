import React from "react";
import { Grid, Container } from "@mui/material";
import { HeadingBox, MainBox, Typographyh5 } from "./styled";
import { CardComponent } from "./data";
import { TranslationAtom } from "@/components/TranslationAtom";

const CommonServices = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <HeadingBox>
            <Typographyh5 variant="h6" color="initial" gutterBottom>
              <TranslationAtom word="digitalMarketing:commonServices.heading" />
            </Typographyh5>
          </HeadingBox>
          <Grid container spacing={3}>
            <CardComponent />
          </Grid>
        </Container>
      </MainBox>
    </>
  );
};

export default CommonServices;
