"use client";
import { CardContent, Grid } from "@mui/material";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { MainCard, MainGrid, ParaTypography, TitleTypography } from "./styled";
import top1 from "../../../../../../../public/top1webp.webp";
import top2 from "../../../../../../../public/top2webp.webp";
import top3 from "../../../../../../../public/top3webp.webp";
import bottom1 from "../../../../../../../public/bottom1webp.webp";
import bottom2 from "../../../../../../../public/bottom2webp.webp";
import bottom3 from "../../../../../../../public/bottom3webp.webp";
import { useTranslation } from "react-i18next";

const Slider: React.FC = () => {
  const { t } = useTranslation();

  const CardData = [
    {
      imageTop: top1,
      title: t("landingPage:sliderData.heading1"),
      para: t("landingPage:sliderData.para1"),
      imageBottom: bottom1,
      gradient: "linear-gradient(270deg, #d015bbff 0%, #66075bff 100%)",
    },
    {
      imageTop: top2,
      title: t("landingPage:sliderData.heading2"),
      para: t("landingPage:sliderData.para2"),
      imageBottom: bottom2,
      gradient: "linear-gradient(270deg, #5cefffff 0%, #048a99ff 100%)",
    },
    {
      imageTop: top3,
      title: t("landingPage:sliderData.heading3"),
      para: t("landingPage:sliderData.para2"),
      imageBottom: bottom3,
      gradient: "linear-gradient(270deg, #b959f5ff 0%, #791fb2ff 100%)",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const onChange = (index: any) => {
    setCurrentIndex(index);
  };

  const onClickItem = (index: any) => {
    console.log(`Clicked item at index ${index}`);
  };

  const onClickThumb = (index: any) => {
    console.log(`Clicked thumb at index ${index}`);
  };

  // Group data into sets of three cards
  const groupedData = CardData.reduce((acc: any, current: any, index: any) => {
    const groupIndex = Math.floor(index / 3);
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push(current);
    return acc;
  }, []);

  return (
    <Carousel
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
      autoPlay={false}
      showArrows={true}
      onChange={onChange}
      onClickItem={onClickItem}
      onClickThumb={onClickThumb}
      showIndicators={false}
      interval={10000}
      transitionTime={3000}
    >
      {groupedData.map((group: any, groupIndex: any) => (
        <div key={groupIndex}>
          <Grid container spacing={1}>
            {group.map((item: any, index: any) => (
              <MainGrid key={index} item xs={12} sm={4} md={4} lg={4} xl={4}>
                <MainCard gradient={item.gradient}>
                  <CardContent>
                    <Image
                      src={item.imageTop}
                      alt={item.title}
                      style={{ height: "50px", width: "50px" }}
                    />
                    <TitleTypography variant="h3" gutterBottom>
                      {item.title}
                    </TitleTypography>
                    <ParaTypography variant="body2" gutterBottom>
                      {item.para}
                    </ParaTypography>
                    <Image
                      src={item.imageBottom}
                      alt={item.title}
                      style={{ height: "10rem", width: "10rem" }}
                    />
                  </CardContent>
                </MainCard>
              </MainGrid>
            ))}
          </Grid>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
