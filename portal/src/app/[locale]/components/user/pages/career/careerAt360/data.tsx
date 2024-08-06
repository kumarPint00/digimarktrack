"use client";
import { useTranslation } from "react-i18next";
import { TypoBody1 } from "../overView/styled";

const Points = () => {
  const { t } = useTranslation();
  return [
    t("career:careerAt360.points.point1"),
    t("career:careerAt360.points.point2"),
    t("career:careerAt360.points.point3"),
    t("career:careerAt360.points.point4"),
    t("career:careerAt360.points.point5"),
    t("career:careerAt360.points.point6"),
    t("career:careerAt360.points.point7"),
    t("career:careerAt360.points.point8"),
    t("career:careerAt360.points.point9"),
  ];
};

export const PointsComponent = () => {
  return (
    <>
      {Points().map((item, index) => (
        <TypoBody1 key={index} variant="body1" color="initial">
          {item}
        </TypoBody1>
      ))}
    </>
  );
};
