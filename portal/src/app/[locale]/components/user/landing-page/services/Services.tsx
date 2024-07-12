import { Container } from "@mui/material";
import React from "react";
import Slider from "./Slider";
import {
  HeadingBox,
  KnowMoreLink,
  MainBox,
  Typographyh3,
  Typographyh5,
  Typographyh5Link,
} from "./styled";
import { TranslationAtom } from "@/components/TranslationAtom";

const Services = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <HeadingBox>
            <Typographyh5 variant="h5" color="initial" gutterBottom>
              <TranslationAtom word="landingPage:bestServices.mainHeading" />
            </Typographyh5>
            <Typographyh3 variant="h3" color="initial" gutterBottom>
              <TranslationAtom word="landingPage:bestServices.heading" />
            </Typographyh3>
          </HeadingBox>
          <Slider />
          <Typographyh5Link variant="h5" color="initial">
            <TranslationAtom word="landingPage:bestServices.para" />{" "}
            <KnowMoreLink href="/viewmore">
              <TranslationAtom word="landingPage:bestServices.link" />
            </KnowMoreLink>
          </Typographyh5Link>
        </Container>
      </MainBox>
    </>
  );
};

export default Services;
