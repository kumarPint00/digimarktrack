"use client";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { CardBox, CardImage, CardTypo } from "./styled";

export const CardData = () => {
  const { t } = useTranslation();
  return [
    {
      icon: "/seo 1.webp",
      text: t("digitalMarketing:commonServices.cardText.text1"),
    },
    {
      icon: "/brand-identity 1.webp",
      text: t("digitalMarketing:commonServices.cardText.text2"),
    },
    {
      icon: "/ecommerce 1.webp",
      text: t("digitalMarketing:commonServices.cardText.text3"),
    },
    {
      icon: "/social-media 1.webp",
      text: t("digitalMarketing:commonServices.cardText.text4"),
    },
    {
      icon: "/search-engine-optimisation 1.webp",
      text: t("digitalMarketing:commonServices.cardText.text5"),
    },
    {
      icon: "/seo 1.webp",
      text: t("digitalMarketing:commonServices.cardText.text6"),
    },
    {
      icon: "/seo (2) 1.webp",
      text: t("digitalMarketing:commonServices.cardText.text7"),
    },
    {
      icon: "/app-store 1.webp",
      text: t("digitalMarketing:commonServices.cardText.text8"),
    },
    {
      icon: "/pay-per-click-advertising 1.webp",
      text: t("digitalMarketing:commonServices.cardText.text9"),
    },
    {
      icon: "/images 1.webp",
      text: t("digitalMarketing:commonServices.cardText.text10"),
    },
    {
      icon: "/online-shopping 1.webp",
      text: t("digitalMarketing:commonServices.cardText.text11"),
    },
    {
      icon: "/content-marketing 1.webp",
      text: t("digitalMarketing:commonServices.cardText.text12"),
    },
  ];
};

export const CardComponent = () => {
  return (
    <>
      {CardData().map((item, index) => (
        <Grid key={index} item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardBox>
            <CardImage src={item.icon} alt="icons" height={70} width={70} />
            <CardTypo variant="subtitle1" color="initial">
              {item.text}
            </CardTypo>
          </CardBox>
        </Grid>
      ))}
    </>
  );
};
