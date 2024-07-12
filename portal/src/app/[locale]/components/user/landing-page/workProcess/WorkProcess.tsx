import { Container, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import workProcessImg from "../../../../../../../public/work proccesswebp.webp";
import { HeadingBox, MainBox, Typographyh3, Typographyh5 } from "./styled";
import { GridOneComponent, GridTwoComponent } from "./data";
import { TranslationAtom } from "@/components/TranslationAtom";

const WorkProcess = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <HeadingBox>
            <Typographyh5 variant="h5" color="initial" gutterBottom>
              <TranslationAtom word="landingPage:workProcess.mainHeading" />
            </Typographyh5>
            <Typographyh3 variant="h3" color="initial" gutterBottom>
              <TranslationAtom word="landingPage:workProcess.heading" />
            </Typographyh3>
          </HeadingBox>
        </Container>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <GridOneComponent />
          </Grid>
        </Container>
        <Image
          src={workProcessImg}
          alt="image"
          style={{ height: "100%", width: "100%" }}
        />
        <Container maxWidth="xl">
          <Grid container justifyContent="center" spacing={3}>
            <GridTwoComponent />
          </Grid>
        </Container>
      </MainBox>
    </>
  );
};

export default WorkProcess;
