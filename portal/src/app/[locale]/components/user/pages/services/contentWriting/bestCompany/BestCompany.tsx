import React from "react";
import { Container } from "@mui/material";
import { HeadParaBox, MainBox, TypoBody1, TypoH3 } from "./styled";
import { TranslationAtom } from "@/components/TranslationAtom";
import { BulletPointsComponent } from "./data";

const BestCompany = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <HeadParaBox>
            <TypoH3 variant="h4" color="initial">
              <TranslationAtom word="contentWriting:bestCompany.heading" />
            </TypoH3>
            <TypoBody1 variant="body1" color="initial">
              <TranslationAtom word="contentWriting:bestCompany.para" />
            </TypoBody1>
          </HeadParaBox>
          <BulletPointsComponent />
        </Container>
      </MainBox>
    </>
  );
};

export default BestCompany;
