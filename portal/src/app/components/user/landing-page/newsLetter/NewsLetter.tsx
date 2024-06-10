import { Container } from "@mui/material";
import React from "react";
import { useTranslations } from 'next-intl';
import newsletterimg from "../../../../../../public/newsletterimg.png";
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

const NewsLetter = () => {
  const t = useTranslations('newsletter');

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
                {t('heading')}
              </HeadText>
              <HeadText variant="body1" color="initial">
                {t('subheading')}
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
                  {t('buttonText')}
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
