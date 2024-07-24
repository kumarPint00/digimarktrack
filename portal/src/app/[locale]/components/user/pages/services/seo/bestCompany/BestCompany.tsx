import React from "react";
import { Container } from "@mui/material";
import { MainBox, TypoH3 } from "./styled";
import { BulletPointsComponent } from "./data";
import { TranslationAtom } from "@/components/TranslationAtom";

const BestCompany = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <TypoH3 variant="h4" color="initial">
            <TranslationAtom word="seoManagement:bestCompany.heading" />
          </TypoH3>
          <BulletPointsComponent />
        </Container>
      </MainBox>
    </>
  );
};

export default BestCompany;
