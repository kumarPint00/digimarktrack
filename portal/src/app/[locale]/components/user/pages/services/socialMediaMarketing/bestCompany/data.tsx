"use client";
import { useTranslation } from "react-i18next";
import { HeadContentBox, TypoBody1, TypoH5 } from "./styled";

export const Paragraph = () => {
  const { t } = useTranslation();
  return [
    t("socialMediaMarketing:bestCompany.para1"),
    t("socialMediaMarketing:bestCompany.para2"),
  ];
};

export const BulletPoints = () => {
  const { t } = useTranslation();
  return [
    {
      heading: t("socialMediaMarketing:bestCompany.bulletPoints.heading1"),
      content: t("socialMediaMarketing:bestCompany.bulletPoints.content1"),
    },
    {
      heading: t("socialMediaMarketing:bestCompany.bulletPoints.heading2"),
      content: t("socialMediaMarketing:bestCompany.bulletPoints.content2"),
    },
    {
      heading: t("socialMediaMarketing:bestCompany.bulletPoints.heading3"),
      content: t("socialMediaMarketing:bestCompany.bulletPoints.content3"),
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
