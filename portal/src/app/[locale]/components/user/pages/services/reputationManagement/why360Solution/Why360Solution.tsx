import React from "react";
import { Container, Grid } from "@mui/material";
import { HeadParaBox, ImageBox, MainBox, TypoH3 } from "./styled";
import ImageRight from "../../../../../../../../../public/Faby-BLOG-COVERS-7 1.webp";
import Image from "next/image";
import { TranslationAtom } from "@/components/TranslationAtom";
import { BulletPointsComponent, ParagraphComponent } from "./data";

const Why360Solution = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <HeadParaBox>
            <TypoH3 variant="h4" color="initial">
              <TranslationAtom word="reputationManagment:why360Solution.heading" />
            </TypoH3>
            <ParagraphComponent />
          </HeadParaBox>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={7} md={7} lg={7} xl={7}>
              <BulletPointsComponent />
            </Grid>
            <Grid item xs={12} sm={5} md={5} lg={5} xl={5}>
              <ImageBox>
                <Image src={ImageRight} alt="image" height={286} width={280} />
              </ImageBox>
            </Grid>
          </Grid>
        </Container>
      </MainBox>
    </>
  );
};

export default Why360Solution;
