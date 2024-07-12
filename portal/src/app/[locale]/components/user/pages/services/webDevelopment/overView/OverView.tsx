import React from "react";
import { Container } from "@mui/material";
import { HeadTypo, MainBox } from "./styled";
import { TranslationAtom } from "@/components/TranslationAtom";
import { OverviewParagraphComponent } from "./data";

const OverView = () => {
  return (
    <MainBox>
      <Container maxWidth="xl">
        <HeadTypo variant="h4" gutterBottom>
          <TranslationAtom word="webDevelopment:overview.overviewHeading" />
        </HeadTypo>
        <OverviewParagraphComponent />
      </Container>
    </MainBox>
  );
};

export default OverView;
