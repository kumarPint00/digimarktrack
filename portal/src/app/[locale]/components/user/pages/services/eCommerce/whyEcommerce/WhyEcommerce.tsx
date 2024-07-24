import React from "react";
import { Container } from "@mui/material";
import { HeadParaBox, MainBox, TypoH3 } from "./styled";
import { TranslationAtom } from "@/components/TranslationAtom";
import { BulletPointsComponent, ParagraphComponent } from "./data";

const WhyEcommerce = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <HeadParaBox>
            <TypoH3 variant="h4" color="initial">
              <TranslationAtom word="eCommerce:whyEcommerce.heading" />
            </TypoH3>
            <ParagraphComponent />
          </HeadParaBox>
          <BulletPointsComponent />
        </Container>
      </MainBox>
    </>
  );
};

export default WhyEcommerce;
