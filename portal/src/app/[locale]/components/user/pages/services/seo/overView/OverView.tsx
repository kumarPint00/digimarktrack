import React from "react";
import { Container, Grid } from "@mui/material";
import Image from "next/image";
import rightImage from "../../../../../../../../../public/pngwing.com (28) 1.webp";
import { ImageBox, MainBox, TypoBody1, TypoH3 } from "./styled";
import { TranslationAtom } from "@/components/TranslationAtom";

const OverView = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={7} md={7} lg={7} xl={7}>
              <TypoH3 variant="h4" color="initial">
                <TranslationAtom word="seoManagement:overView.mainHeading" />
              </TypoH3>
              <TypoBody1
                sx={{ fontWeight: "bold" }}
                variant="body1"
                color="initial"
              >
                <TranslationAtom word="seoManagement:overView.heading1" />
              </TypoBody1>
              <TypoBody1
                sx={{ fontWeight: "bold" }}
                variant="body2"
                color="initial"
              >
                <TranslationAtom word="seoManagement:overView.heading2" />
              </TypoBody1>
              <TypoBody1 variant="body1" color="initial">
                <TranslationAtom word="seoManagement:overView.para" />
              </TypoBody1>
            </Grid>
            <Grid item xs={12} sm={5} md={5} lg={5} xl={5}>
              <ImageBox>
                <Image src={rightImage} alt="image" height={256} width={262} />
              </ImageBox>
            </Grid>
          </Grid>
        </Container>
      </MainBox>
    </>
  );
};

export default OverView;
