"use client";
import { useTranslation } from "react-i18next";
import Test1 from "../../../../../../../public/test1webp.webp";
import Test2 from "../../../../../../../public/test2webp.webp";
import Test3 from "../../../../../../../public/test3webp.webp";
import Test4 from "../../../../../../../public/test4webp.webp";
import { Box, Grid } from "@mui/material";
import {
  ImageTextBox,
  RatingStarIcon,
  TestCard,
  TextTypography,
  Typographyh6,
} from "./styled";
import Image from "next/image";

export const CardData = () => {
  const { t } = useTranslation();
  return [
    {
      image: Test1,
      text: t("landingPage:testimonials.card.text1"),
      name: t("landingPage:testimonials.card.name1"),
    },
    {
      image: Test2,
      text: t("landingPage:testimonials.card.text2"),
      name: t("landingPage:testimonials.card.name2"),
    },
    {
      image: Test3,
      text: t("landingPage:testimonials.card.text3"),
      name: t("landingPage:testimonials.card.name3"),
    },
    {
      image: Test4,
      text: t("landingPage:testimonials.card.text4"),
      name: t("landingPage:testimonials.card.name4"),
    },
  ];
};

const TestimonialCards = () => {
  return (
    <>
      {CardData().map((item, index) => (
        <Grid key={index} item xs={12} sm={3} md={3} lg={3} xl={3}>
          <TestCard>
            <ImageTextBox>
              <Image src={item.image} alt="image" height={168} width={123} />
              <Box>
                <RatingStarIcon /> <RatingStarIcon /> <RatingStarIcon />{" "}
                <RatingStarIcon /> <RatingStarIcon />
                <TextTypography variant="body2" color="initial">
                  {item.text}
                </TextTypography>
              </Box>
            </ImageTextBox>
            <Typographyh6 variant="h6" color="initial">
              {item.name}
            </Typographyh6>
          </TestCard>
        </Grid>
      ))}
    </>
  );
};

export default TestimonialCards;
