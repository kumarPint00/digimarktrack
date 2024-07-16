"use client";
import { useTranslation } from "react-i18next";
import { HeadContentBox, TypoBody1, TypoH5 } from "./styled";

export const Paragraph = () => {
  const { t } = useTranslation();
  return [
    t("digitalMarketing:bestCompany.para1"),
    t("digitalMarketing:bestCompany.para2"),
  ];
};

export const BulletPoints = () => {
  const { t } = useTranslation();
  return [
    {
      heading: t("digitalMarketing:bestCompany.bulletPoints.heading1"),
      content: t("digitalMarketing:bestCompany.bulletPoints.content1"),
    },
    {
      heading: t("digitalMarketing:bestCompany.bulletPoints.heading2"),
      content: t("digitalMarketing:bestCompany.bulletPoints.content2"),
    },
    {
      heading: t("digitalMarketing:bestCompany.bulletPoints.heading3"),
      content: t("digitalMarketing:bestCompany.bulletPoints.content3"),
    },
    {
      heading: t("digitalMarketing:bestCompany.bulletPoints.heading4"),
      content: t("digitalMarketing:bestCompany.bulletPoints.content4"),
    },
  ];
};

export const ParagraphComponent = () => {
  return (
    <>
      {Paragraph().map((item, index) => (
        <TypoBody1 key={index} variant="body1" color="initial">
          {item}
        </TypoBody1>
      ))}
    </>
  );
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
