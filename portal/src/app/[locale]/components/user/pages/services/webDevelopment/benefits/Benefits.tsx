import React from "react";
import { Container } from "@mui/material";
import { HeadTypo, MainBox } from "./styled";
import { BenefitsTextComponent } from "./data";
import { TranslationAtom } from "@/components/TranslationAtom";

const Benefits = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <HeadTypo variant="h4" gutterBottom>
            <TranslationAtom word="webDevelopment:benefits.heading" />
          </HeadTypo>
          <BenefitsTextComponent />
        </Container>
      </MainBox>
    </>
  );
};

export default Benefits;
