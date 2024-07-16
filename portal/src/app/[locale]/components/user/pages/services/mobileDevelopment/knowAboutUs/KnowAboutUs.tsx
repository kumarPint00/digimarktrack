import React from "react";
import { HeadTypo, HeadTypoH6, ImageBox, MainBox } from "./styled";
import { Container, Grid } from "@mui/material";
import knowaboutus from "../../../../../../../../../public/knowaboutus.webp";
import Image from "next/image";
import { TranslationAtom } from "@/components/TranslationAtom";
import { KnowAboutUsParaComponent } from "./data";

const KnowAboutUs = () => {
  return (
    <MainBox>
      <Container maxWidth="xl">
        <HeadTypoH6 variant="h6" gutterBottom>
          <TranslationAtom word="mobileDevelopment:knowAboutUs.heading" />
        </HeadTypoH6>
        <HeadTypo variant="h4" gutterBottom>
          <TranslationAtom word="mobileDevelopment:knowAboutUs.subHeading" />
        </HeadTypo>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
            <KnowAboutUsParaComponent />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <ImageBox>
              <Image src={knowaboutus} alt="image" height={259} width={256} />
            </ImageBox>
          </Grid>
        </Grid>
      </Container>
    </MainBox>
  );
};

export default KnowAboutUs;
