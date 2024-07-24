"use client";
import { useTranslation } from "react-i18next";
import { HeadContentBox, TypoBody1, TypoH5 } from "./styled";

export const BulletPoints = () => {
  const { t } = useTranslation();
  return [
    {
      heading: t("seoManagement:bestCompany.bulletPoints.heading1"),
      para: t("seoManagement:bestCompany.bulletPoints.para1"),
    },
    {
      heading: t("seoManagement:bestCompany.bulletPoints.heading2"),
      para: t("seoManagement:bestCompany.bulletPoints.para2"),
    },
    {
      heading: t("seoManagement:bestCompany.bulletPoints.heading3"),
      para: t("seoManagement:bestCompany.bulletPoints.para3"),
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
          <TypoBody1 key={index} variant="body1" color="initial">
            {item.para}
          </TypoBody1>
        </HeadContentBox>
      ))}
    </>
  );
};
