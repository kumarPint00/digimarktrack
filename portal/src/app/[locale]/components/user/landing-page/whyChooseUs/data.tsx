"use client";
import { useTranslation } from "react-i18next";
import CheckIcon from "../../../../../../../public/whychooseus2webp.webp";
import {
  CheckIconBox,
  NumberCounterBox,
  NumberGrid,
  PoinIconBox,
  PointsBody2,
  PointsTitleTypography,
  TypoH2,
  TypoH6,
} from "./styled";
import NumberCounter from "../../utils/NumberCounter";
import Image from "next/image";
import { Box } from "@mui/material";

export const NumberArray: any = () => {
  const { t } = useTranslation();
  return [
    { number: "12k", text: t("landingPage:numberCounter.text1") },
    { number: "35k", text: t("landingPage:numberCounter.text2") },
    { number: "15k", text: t("landingPage:numberCounter.text3") },
    { number: "12+", text: t("landingPage:numberCounter.text4") },
  ];
};

export const PointsArray = () => {
  const { t } = useTranslation();
  return [
    {
      icon: CheckIcon,
      title: t("landingPage:whyChooseUs.mapHead1"),
      text: t("landingPage:whyChooseUs.mapPara1"),
    },
    {
      icon: CheckIcon,
      title: t("landingPage:whyChooseUs.mapHead1"),
      text: t("landingPage:whyChooseUs.mapPara2"),
    },
    {
      icon: CheckIcon,
      title: t("landingPage:whyChooseUs.mapHead1"),
      text: t("landingPage:whyChooseUs.mapPara3"),
    },
    {
      icon: CheckIcon,
      title: t("landingPage:whyChooseUs.mapHead1"),
      text: t("landingPage:whyChooseUs.mapPara4"),
    },
  ];
};

export const CounterNumberComponent = () => {
  return (
    <>
      {NumberArray().map((item: any, index: any) => (
        <NumberGrid key={index} item xs={6} sm={3} md={3} lg={3} xl={3}>
          <NumberCounterBox>
            <TypoH2 variant="h2" color="initial">
              <NumberCounter
                number={Number(item.number.replace(/[^\d.-]/g, ""))}
              />
              {item.number.replace(/[0-9]/g, "")}
            </TypoH2>
            <TypoH6 variant="h6" color="initial">
              {item.text}
            </TypoH6>
          </NumberCounterBox>
        </NumberGrid>
      ))}
    </>
  );
};

export const PointsComponent = () => {
  return (
    <>
      {PointsArray().map((item, index) => (
        <CheckIconBox key={index}>
          <PoinIconBox>
            <Image src={item.icon} alt="image" height={25} width={25} />
          </PoinIconBox>
          <Box>
            <PointsTitleTypography variant="h4" color="initial">
              {item.title}
            </PointsTitleTypography>
            <PointsBody2 variant="body2" color="initial">
              {item.text}
            </PointsBody2>
          </Box>
        </CheckIconBox>
      ))}
    </>
  );
};
