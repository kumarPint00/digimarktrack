"use client";
import { useTranslation } from "react-i18next";
import { HeadContentBox, TypoBody1, TypoH5 } from "./styled";

export const BulletPoints = () => {
  const { t } = useTranslation();
  return [
    {
      heading: t("contentWriting:bestCompany.bulletPoints.heading1"),
      content: t("contentWriting:bestCompany.bulletPoints.para1"),
    },
    {
      heading: t("contentWriting:bestCompany.bulletPoints.heading2"),
      content: t("contentWriting:bestCompany.bulletPoints.para2"),
    },
    {
      heading: t("contentWriting:bestCompany.bulletPoints.heading3"),
      content: t("contentWriting:bestCompany.bulletPoints.para3"),
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
