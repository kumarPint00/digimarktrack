import { Container } from "@mui/material";
import React from "react";
import newsletterimg from "../../../../../../../public/newsletterimgwebp.webp";
import {
  FieldButton,
  HeadText,
  MainBox,
  NewsletterImage,
  PositionRelativeBox,
  TextBox,
  TextfieldBox,
  TextFieldMain,
} from "./styled";
import { TranslationAtom } from "@/components/TranslationAtom";

const NewsLetter = () => {
  return (
    <>
      <PositionRelativeBox>
        <Container maxWidth="xl">
          <MainBox>
            <NewsletterImage
              src={newsletterimg}
              alt="image"
              height={378}
              width={371}
            />
            <TextBox>
              <HeadText variant="h3" color="initial">
                <TranslationAtom word="landingpage:newsLetter.heading" />
              </HeadText>
              <HeadText variant="body1" color="initial">
                <TranslationAtom word="landingpage:newsLetter.para" />
              </HeadText>
              <TextfieldBox>
                <TextFieldMain
                  size="small"
                  variant="standard"
                  InputProps={{
                    disableUnderline: true, // <== added this
                  }}
                />
                <FieldButton size="small" variant="contained">
                  <TranslationAtom word="landingpage:newsLetter.button" />
                </FieldButton>
              </TextfieldBox>
            </TextBox>
          </MainBox>
        </Container>
      </PositionRelativeBox>
    </>
  );
};

export default NewsLetter;
