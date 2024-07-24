import React from "react";
import { Container, Grid } from "@mui/material";
import Image from "next/image";
import rightImage from "../../../../../../../../../public/Graphic_Design_1 1.webp";
import { ImageBox, MainBox, TypoH3 } from "./styled";
import { TranslationAtom } from "@/components/TranslationAtom";
import { ParagraphComponent } from "./data";

const OverView = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={7} md={7} lg={7} xl={7}>
              <TypoH3 variant="h4" color="initial">
                <TranslationAtom word="graphicDesign:overView.heading" />
              </TypoH3>
              <ParagraphComponent />
            </Grid>
            <Grid item xs={12} sm={5} md={5} lg={5} xl={5}>
              <ImageBox>
                <Image src={rightImage} alt="image" height={284} width={384} />
              </ImageBox>
            </Grid>
          </Grid>
        </Container>
      </MainBox>
    </>
  );
};

export default OverView;
