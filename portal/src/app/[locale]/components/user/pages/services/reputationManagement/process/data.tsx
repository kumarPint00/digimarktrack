"use client";
import { useTranslation } from "react-i18next";
import { HeadContentBox, TypoBody1, TypoH5 } from "./styled";

export const BulletPoints = () => {
  const { t } = useTranslation();
  return [
    {
      heading: t("reputationManagment:process.bulletPoints.heading1"),
      content: [
        t("reputationManagment:process.bulletPoints.content1.text1"),
        t("reputationManagment:process.bulletPoints.content1.text2"),
      ],
    },
    {
      heading: t("reputationManagment:process.bulletPoints.heading2"),
      content: [
        t("reputationManagment:process.bulletPoints.content2.text1"),
        t("reputationManagment:process.bulletPoints.content2.text2"),
      ],
    },
    {
      heading: t("reputationManagment:process.bulletPoints.heading3"),
      content: [
        t("reputationManagment:process.bulletPoints.content3.text1"),
        t("reputationManagment:process.bulletPoints.content3.text2"),
        t("reputationManagment:process.bulletPoints.content3.text3"),
        t("reputationManagment:process.bulletPoints.content3.text4"),
      ],
    },
    {
      heading: t("reputationManagment:process.bulletPoints.heading4"),
      content: [
        t("reputationManagment:process.bulletPoints.content4.text1"),
        t("reputationManagment:process.bulletPoints.content4.text2"),
        t("reputationManagment:process.bulletPoints.content4.text3"),
      ],
    },
    {
      heading: t("reputationManagment:process.bulletPoints.heading5"),
      content: [t("reputationManagment:process.bulletPoints.content5.text1")],
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
          {item.content.map((item, index) => (
            <TypoBody1 key={index} variant="body1" color="initial">
              {item}
            </TypoBody1>
          ))}
        </HeadContentBox>
      ))}
    </>
  );
};
