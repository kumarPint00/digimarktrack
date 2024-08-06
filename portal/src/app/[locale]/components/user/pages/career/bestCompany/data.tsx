"use client";
import { useTranslation } from "react-i18next";
import { HeadContentBox, TypoBody1, TypoH5 } from "./styled";

export const BulletPoints = () => {
  const { t } = useTranslation();
  return [
    {
      heading: t("career:Opportunities.bulletPoints.heading1"),
      content: t("career:Opportunities.bulletPoints.para1"),
    },
    {
      heading: t("career:Opportunities.bulletPoints.heading2"),
      content: t("career:Opportunities.bulletPoints.para2"),
    },
    {
      heading: t("career:Opportunities.bulletPoints.heading3"),
      content: t("career:Opportunities.bulletPoints.para3"),
    },
    {
      heading: t("career:Opportunities.bulletPoints.heading4"),
      content: t("career:Opportunities.bulletPoints.para4"),
    },
    {
      heading: t("career:Opportunities.bulletPoints.heading5"),
      content: t("career:Opportunities.bulletPoints.para5"),
    },
    {
      heading: t("career:Opportunities.bulletPoints.heading6"),
      content: t("career:Opportunities.bulletPoints.para6"),
    },
  ];
};

export const BulletPointsComponent = () => {
  return (
    <>
      {BulletPoints().map((item, index) => (
        <HeadContentBox key={index}>
          <TypoH5 variant="h5" color="initial">
            {item.heading}
          </TypoH5>
          <TypoBody1 variant="body1" color="initial">
            {item.content}
          </TypoBody1>
        </HeadContentBox>
      ))}
    </>
  );
};
