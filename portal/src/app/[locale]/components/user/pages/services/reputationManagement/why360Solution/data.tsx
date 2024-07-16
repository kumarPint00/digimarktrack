"use client";
import { useTranslation } from "react-i18next";
import { HeadContentBox, TypoBody1, TypoH5 } from "./styled";

export const Paragraph = () => {
  const { t } = useTranslation();
  return [
    t("reputationManagment:why360Solution.para.para1"),
    t("reputationManagment:why360Solution.para.para2"),
    t("reputationManagment:why360Solution.para.para3"),
  ];
};

export const BulletPoints = () => {
  const { t } = useTranslation();
  return [
    {
      heading: t("reputationManagment:why360Solution.bulletPoints.heading1"),
      content: t("reputationManagment:why360Solution.bulletPoints.content1"),
    },
    {
      heading: t("reputationManagment:why360Solution.bulletPoints.heading2"),
      content: t("reputationManagment:why360Solution.bulletPoints.content2"),
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
