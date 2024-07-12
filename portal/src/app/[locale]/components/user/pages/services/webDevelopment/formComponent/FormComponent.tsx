import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import {
  FormTextBox,
  MainBox,
  SocialTypo1,
  SocialTypo2,
  SocialmediaBox,
  Typographyh3,
  Typographyh5,
} from "./styled";
import Image from "next/image";
import { SocialImages } from "./data";
import Form from "./Form";
import { TranslationAtom } from "@/components/TranslationAtom";

const FormComponent = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <Typographyh5 variant="h5" color="initial" gutterBottom>
            <TranslationAtom word="webDevelopment:formComponent.heading" />
          </Typographyh5>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <FormTextBox>
                <Typographyh3 variant="h3" color="initial" gutterBottom>
                  <TranslationAtom word="webDevelopment:formComponent.subHeading" />
                </Typographyh3>
                <Typography variant="subtitle1" color="initial">
                  <TranslationAtom word="webDevelopment:formComponent.para" />
                </Typography>
                <SocialmediaBox>
                  <SocialTypo1 variant="body1" color="initial">
                    <TranslationAtom word="webDevelopment:formComponent.socialText1" />
                  </SocialTypo1>
                  <Box>
                    {SocialImages.map((item, index) => (
                      <Image
                        key={index}
                        src={item}
                        alt="icon"
                        height={40}
                        width={40}
                        style={{ marginRight: "15px" }}
                      />
                    ))}
                  </Box>
                  <SocialTypo2 variant="body1" color="initial">
                    <TranslationAtom word="webDevelopment:formComponent.socialText1" />
                  </SocialTypo2>
                </SocialmediaBox>
              </FormTextBox>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </MainBox>
    </>
  );
};

export default FormComponent;
