"use client";
import { Box, Typography, styled, Container, Grid, Card } from "@mui/material";
import Image from "next/image";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import Test1 from "../../../../../../public/test1.png";
import Test2 from "../../../../../../public/test2.png";
import Test3 from "../../../../../../public/test3.png";
import Test4 from "../../../../../../public/test4.png";
import { useTranslations } from 'next-intl';

const MainBox = styled(Box)(({ theme }) => ({
  backgroundImage: "url(/testimonialBackground.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  padding: "3rem 0rem",
  marginBottom: "2rem",
  [theme.breakpoints.down("sm")]: {
    backgroundImage: "none",
    padding: "1rem 0rem",
    marginBottom: "0.6rem",
  },
}));

const HeadingBox = styled(Box)(({ theme }) => ({
  textAlign: "left" as any,
}));

const ImageTextBox = styled(Box)(({ theme }) => ({
  display: "flex",
  columnGap: "10px",
  borderBottom: "1.5px solid black",
}));

const TestCard = styled(Card)(({ theme }) => ({
  padding: "1rem",
}));

const Typographyh5 = styled(Typography)(({ theme }) => ({
  backgroundColor: "#f6c460ff",
  color: "black",
  padding: "5px 0px",
  textAlign: "center",
  width: "300px",
  borderRadius: "25px",
  textTransform: "capitalize",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const Typographyh3 = styled(Typography)(({ theme }) => ({
  color: "white",
  textTransform: "capitalize",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.5rem",
    color: "black",
    textAlign: "center",
  },
}));

const Typographyh6 = styled(Typography)(({ theme }) => ({
}));

const TextTypography = styled(Typography)(({ theme }) => ({
  fontSize: "13px",
}));

const RatingStarIcon = styled(StarIcon)(({ theme }) => ({
  color: "#f6c460ff",
}));

const Testimonials = () => {
  const t = useTranslations('testimonials');

  return (
    <MainBox>
      <Container maxWidth="xl">
        <HeadingBox>
          <Typographyh5 variant="h5" color="initial" gutterBottom>
            {t('heading.ourTestimonials')}
          </Typographyh5>
          <Typographyh3 variant="h3" color="initial" gutterBottom>
            {t('heading.whatOurClientSays')}
          </Typographyh3>
        </HeadingBox>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
              <TestCard>
                <ImageTextBox>
                  <Image src={Test1} alt="Testimonial 1" height={168} width={123} />
                  <Box>
                    <RatingStarIcon /> <RatingStarIcon /> <RatingStarIcon /> <RatingStarIcon /> <RatingStarIcon />
                    <TextTypography variant="body2" color="initial">
                      {t('cards.0.text')}
                    </TextTypography>
                  </Box>
                </ImageTextBox>
                <Typographyh6 variant="h6" color="initial">
                  {t('cards.0.name')}
                </Typographyh6>
              </TestCard>
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
              <TestCard>
                <ImageTextBox>
                  <Image src={Test2} alt="Testimonial 2" height={168} width={123} />
                  <Box>
                    <RatingStarIcon /> <RatingStarIcon /> <RatingStarIcon /> <RatingStarIcon /> <RatingStarIcon />
                    <TextTypography variant="body2" color="initial">
                      {t('cards.1.text')}
                    </TextTypography>
                  </Box>
                </ImageTextBox>
                <Typographyh6 variant="h6" color="initial">
                  {t('cards.1.name')}
                </Typographyh6>
              </TestCard>
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
              <TestCard>
                <ImageTextBox>
                  <Image src={Test3} alt="Testimonial 3" height={168} width={123} />
                  <Box>
                    <RatingStarIcon /> <RatingStarIcon /> <RatingStarIcon /> <RatingStarIcon /> <RatingStarIcon />
                    <TextTypography variant="body2" color="initial">
                      {t('cards.2.text')}
                    </TextTypography>
                  </Box>
                </ImageTextBox>
                <Typographyh6 variant="h6" color="initial">
                  {t('cards.2.name')}
                </Typographyh6>
              </TestCard>
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
              <TestCard>
                <ImageTextBox>
                  <Image src={Test4} alt="Testimonial 4" height={168} width={123} />
                  <Box>
                    <RatingStarIcon /> <RatingStarIcon /> <RatingStarIcon /> <RatingStarIcon /> <RatingStarIcon />
                    <TextTypography variant="body2" color="initial">
                      {t('cards.3.text')}
                    </TextTypography>
                  </Box>
                </ImageTextBox>
                <Typographyh6 variant="h6" color="initial">
                  {t('cards.3.name')}
                </Typographyh6>
              </TestCard>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </MainBox>
  );
};

export default Testimonials;
