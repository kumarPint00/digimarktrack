"use client";
import { Box, Card, CardContent, Grid, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import top1 from "../../../../../../public/top1.png";
import top2 from "../../../../../../public/top2.png";
import top3 from "../../../../../../public/top3.png";
import bottom1 from "../../../../../../public/bottom1.png";
import bottom2 from "../../../../../../public/bottom2.png";
import bottom3 from "../../../../../../public/bottom3.png";

interface MainCardProps {
  gradient: string;
}

const MainCard = styled(Card)<MainCardProps>(({ gradient }) => ({
  background: gradient,
  height: "480px",
  minWidth: 275,
  maxWidth: 380,
}));

const MainGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
}));

const TitleTypography = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: "1.5rem",
  color: "white",
  height: "5.3rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const ParaTypography = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: "1rem",
  color: "white",
  height: "9.3rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const t = useTranslations('slider');

  const onChange = (index: number) => {
    setCurrentIndex(index);
  };

  const onClickItem = (index: number) => {
    console.log(`Clicked item at index ${index}`);
  };

  const onClickThumb = (index: number) => {
    console.log(`Clicked thumb at index ${index}`);
  };

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
      {[ // Wrapping children in an array
        <Box key="slide-1">
          <Grid container spacing={1}>
            <MainGrid item xs={12} sm={4} md={4} lg={4} xl={4}>
              <MainCard gradient="linear-gradient(270deg, #d015bbff 0%, #66075bff 100%)">
                <CardContent>
                  <Image
                    src={top1}
                    alt="Title 1"
                    style={{ height: "50px", width: "50px" }}
                  />
                  <TitleTypography variant="h3" gutterBottom>
                    {t('cards.0.title')}
                  </TitleTypography>
                  <ParaTypography variant="body2" gutterBottom>
                    {t('cards.0.para')}
                  </ParaTypography>
                  <Image
                    src={bottom1}
                    alt="Title 1"
                    style={{ height: "10rem", width: "10rem" }}
                  />
                </CardContent>
              </MainCard>
            </MainGrid>
          </Grid>
        </Box>,
        <Box key="slide-2">
          <Grid container spacing={1}>
            <MainGrid item xs={12} sm={4} md={4} lg={4} xl={4}>
              <MainCard gradient="linear-gradient(270deg, #5cefffff 0%, #048a99ff 100%)">
                <CardContent>
                  <Image
                    src={top2}
                    alt="Title 2"
                    style={{ height: "50px", width: "50px" }}
                  />
                  <TitleTypography variant="h3" gutterBottom>
                    {t('cards.1.title')}
                  </TitleTypography>
                  <ParaTypography variant="body2" gutterBottom>
                    {t('cards.1.para')}
                  </ParaTypography>
                  <Image
                    src={bottom2}
                    alt="Title 2"
                    style={{ height: "10rem", width: "10rem" }}
                  />
                </CardContent>
              </MainCard>
            </MainGrid>
          </Grid>
        </Box>,
        <Box key="slide-3">
          <Grid container spacing={1}>
            <MainGrid item xs={12} sm={4} md={4} lg={4} xl={4}>
              <MainCard gradient="linear-gradient(270deg, #b959f5ff 0%, #791fb2ff 100%)">
                <CardContent>
                  <Image
                    src={top3}
                    alt="Title 3"
                    style={{ height: "50px", width: "50px" }}
                  />
                  <TitleTypography variant="h3" gutterBottom>
                    {t('cards.2.title')}
                  </TitleTypography>
                  <ParaTypography variant="body2" gutterBottom>
                    {t('cards.2.para')}
                  </ParaTypography>
                  <Image
                    src={bottom3}
                    alt="Title 3"
                    style={{ height: "10rem", width: "10rem" }}
                  />
                </CardContent>
              </MainCard>
            </MainGrid>
          </Grid>
        </Box>
      ]}
    </Carousel>
  );
};

export default Slider;
