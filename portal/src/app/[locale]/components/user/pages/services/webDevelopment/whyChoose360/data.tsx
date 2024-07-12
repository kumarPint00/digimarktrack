"use client";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ContentBox, HeadTypo, ImageBox, ParaTypo } from "./styled";
import Image from "next/image";

export const CardData360 = () => {
  const { t } = useTranslation();
  return [
    {
      src: "/whychoose3.webp",
      head: t("webDevelopment:whyChooseUs.cardText.head1"),
      para: t("webDevelopment:whyChooseUs.cardText.para1"),
    },
    {
      src: "/whychoose1.webp",
      head: t("webDevelopment:whyChooseUs.cardText.head2"),
      para: t("webDevelopment:whyChooseUs.cardText.para2"),
    },
    {
      src: "/whychoose2.webp",
      head: t("webDevelopment:whyChooseUs.cardText.head3"),
      para: t("webDevelopment:whyChooseUs.cardText.para3"),
    },
  ];
};

export const CardTextComponent = () => {
  return (
    <>
      {CardData360().map((item, index) => (
        <Grid key={index} item xs={12} sm={4} md={4} lg={4} xl={4}>
          <ContentBox>
            <ImageBox>
              <Image alt="image" src={item.src} height={256} width={300} />
            </ImageBox>
            <HeadTypo variant="h5" color="initial">
              {item.head}
            </HeadTypo>
            <ParaTypo variant="body1" color="initial">
              {item.para}
            </ParaTypo>
          </ContentBox>
        </Grid>
      ))}
    </>
  );
};
