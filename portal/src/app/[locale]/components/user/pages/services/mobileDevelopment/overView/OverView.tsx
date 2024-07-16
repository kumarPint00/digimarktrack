import React from "react";
import { Container } from "@mui/material";
import { HeadTypo, HeadTypoH6, MainBox } from "./styled";
import { OverViewParagraphComponent } from "./data";
import { TranslationAtom } from "@/components/TranslationAtom";

const OverView = () => {
  return (
    <MainBox>
      <Container maxWidth="xl">
        <HeadTypoH6 variant="h6" gutterBottom>
          <TranslationAtom word="mobileDevelopment:overView.heading" />
        </HeadTypoH6>
        <HeadTypo variant="h4" gutterBottom>
          <TranslationAtom word="mobileDevelopment:overView.subHeading" />
        </HeadTypo>
        <OverViewParagraphComponent />
      </Container>
    </MainBox>
  );
};

export default OverView;
