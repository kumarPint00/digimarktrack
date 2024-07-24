"use client";
import { useTranslation } from "react-i18next";
import { HeadContentBox, TypoBody1, TypoH5 } from "./styled";

export const BulletPoints = () => {
  const { t } = useTranslation();
  return [
    {
      heading: t("softwareDevelopment:bestCompany.bulletPoints.point1.heading"),
      content: [
        t("softwareDevelopment:bestCompany.bulletPoints.point1.content1"),
        t("softwareDevelopment:bestCompany.bulletPoints.point1.content2"),
        t("softwareDevelopment:bestCompany.bulletPoints.point1.content3"),
        t("softwareDevelopment:bestCompany.bulletPoints.point1.content4"),
      ],
    },
    {
      heading: t("softwareDevelopment:bestCompany.bulletPoints.point2.heading"),
      content: [
        t("softwareDevelopment:bestCompany.bulletPoints.point2.content1"),
        t("softwareDevelopment:bestCompany.bulletPoints.point2.content2"),
        t("softwareDevelopment:bestCompany.bulletPoints.point2.content3"),
      ],
    },
    {
      heading: t("softwareDevelopment:bestCompany.bulletPoints.point3.heading"),
      content: [
        t("softwareDevelopment:bestCompany.bulletPoints.point3.content1"),
      ],
    },
    {
      heading: t("softwareDevelopment:bestCompany.bulletPoints.point4.heading"),
      content: [
        t("softwareDevelopment:bestCompany.bulletPoints.point4.content1"),
      ],
    },
    {
      heading: t("softwareDevelopment:bestCompany.bulletPoints.point5.heading"),
      content: [
        t("softwareDevelopment:bestCompany.bulletPoints.point5.content1"),
      ],
    },
    {
      heading: t("softwareDevelopment:bestCompany.bulletPoints.point6.heading"),
      content: [
        t("softwareDevelopment:bestCompany.bulletPoints.point6.content1"),
      ],
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
