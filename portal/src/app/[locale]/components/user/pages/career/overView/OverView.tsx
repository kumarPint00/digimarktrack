import React from "react";
import { Container, Grid } from "@mui/material";
import Image from "next/image";
import rightImage from "../../../../../../../../public/about-interstride 1.webp";
import { ImageBox, MainBox, TypoBody1, TypoH3, TypoH3headTwo } from "./styled";
import { ParagraphComponent } from "./data";
import { TranslationAtom } from "@/components/TranslationAtom";

const OverView = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={7} md={7} lg={7} xl={7}>
              <TypoH3 variant="h4" color="initial">
                <TranslationAtom word="career:overView.heading" />
              </TypoH3>
              <TypoH3headTwo variant="h4" color="initial">
                <TranslationAtom word="career:overView.subHeading" />
              </TypoH3headTwo>
              <TypoBody1 variant="body1" color="initial">
                <TranslationAtom word="career:overView.para1" />
              </TypoBody1>
              <TypoH3 variant="h4" color="initial">
                <TranslationAtom word="career:overView.heading3" />
              </TypoH3>
              <ParagraphComponent />
            </Grid>
            <Grid item xs={12} sm={5} md={5} lg={5} xl={5}>
              <ImageBox>
                <Image src={rightImage} alt="image" height={384} width={458} />
              </ImageBox>
            </Grid>
          </Grid>
        </Container>
      </MainBox>
    </>
  );
};

export default OverView;
