"use client";
import { useTranslation } from "react-i18next";
import { HeadContentBox, TypoBody1, TypoH5 } from "./styled";

export const BulletPoints = () => {
  const { t } = useTranslation();
  return [
    {
      heading: t("itConsulting:benefits.bulletPoints.heading1"),
      content: t("itConsulting:benefits.bulletPoints.para1"),
    },
    {
      heading: t("itConsulting:benefits.bulletPoints.heading2"),
      content: t("itConsulting:benefits.bulletPoints.para2"),
    },
    {
      heading: t("itConsulting:benefits.bulletPoints.heading3"),
      content: t("itConsulting:benefits.bulletPoints.para3"),
    },
    {
      heading: t("itConsulting:benefits.bulletPoints.heading4"),
      content: t("itConsulting:benefits.bulletPoints.para4"),
    },
    {
      heading: t("itConsulting:benefits.bulletPoints.heading5"),
      content: t("itConsulting:benefits.bulletPoints.para5"),
    },
    {
      heading: t("itConsulting:benefits.bulletPoints.heading6"),
      content: t("itConsulting:benefits.bulletPoints.para6"),
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
