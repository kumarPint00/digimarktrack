import React from "react";
import { MainBox, TypoBody1, TypoH3 } from "../overView/styled";
import { Container } from "@mui/material";
import { PointsComponent } from "./data";
import { TranslationAtom } from "@/components/TranslationAtom";

const CareerAt360 = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <TypoH3 variant="h4" color="initial">
            <TranslationAtom word="career:careerAt360.heading" />
          </TypoH3>
          <TypoBody1 variant="body1" color="initial">
          <TranslationAtom word="career:careerAt360.para" />
          </TypoBody1>
          <PointsComponent />
        </Container>
      </MainBox>
    </>
  );
};

export default CareerAt360;
