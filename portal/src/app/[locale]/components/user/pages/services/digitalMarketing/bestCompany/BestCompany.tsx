import React from "react";
import { Container } from "@mui/material";
import { HeadParaBox, MainBox, TypoH3 } from "./styled";
import { BulletPointsComponent, ParagraphComponent } from "./data";
import { TranslationAtom } from "@/components/TranslationAtom";

const BestCompany = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <HeadParaBox>
            <TypoH3 variant="h4" color="initial">
              <TranslationAtom word="digitalMarketing:bestCompany.heading1" />{" "}
              <span style={{ color: "black" }}>
                <TranslationAtom word="digitalMarketing:bestCompany.heading2" />
              </span>
            </TypoH3>
            <ParagraphComponent />
          </HeadParaBox>
          <BulletPointsComponent />
        </Container>
      </MainBox>
    </>
  );
};

export default BestCompany;
