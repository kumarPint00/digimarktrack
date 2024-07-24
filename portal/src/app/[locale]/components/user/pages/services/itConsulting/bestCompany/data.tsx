"use client";
import { useTranslation } from "react-i18next";
import { HeadContentBox, TypoBody1, TypoH5 } from "./styled";

export const BulletPoints = () => {
  const { t } = useTranslation();
  return [
    {
      heading: t("itConsulting:bestCompany.bulletPoints.heading1"),
      content: t("itConsulting:bestCompany.bulletPoints.para1"),
    },
    {
      heading: t("itConsulting:bestCompany.bulletPoints.heading2"),
      content: t("itConsulting:bestCompany.bulletPoints.para2"),
    },
    {
      heading: t("itConsulting:bestCompany.bulletPoints.heading3"),
      content: t("itConsulting:bestCompany.bulletPoints.para3"),
    },
    {
      heading: t("itConsulting:bestCompany.bulletPoints.heading4"),
      content: t("itConsulting:bestCompany.bulletPoints.para4"),
    },
    {
      heading: t("itConsulting:bestCompany.bulletPoints.heading5"),
      content: t("itConsulting:bestCompany.bulletPoints.para5"),
    },
    {
      heading: t("itConsulting:bestCompany.bulletPoints.heading6"),
      content: t("itConsulting:bestCompany.bulletPoints.para6"),
    },
    {
      heading: t("itConsulting:bestCompany.bulletPoints.heading7"),
      content: t("itConsulting:bestCompany.bulletPoints.para7"),
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
