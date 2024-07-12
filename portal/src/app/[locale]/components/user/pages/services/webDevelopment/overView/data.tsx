"use client";
import { useTranslation } from "react-i18next";
import { SubTittleTypo } from "./styled";

export const para = () => {
  const { t } = useTranslation();
  return [
    t("webDevelopment:overview.overviewParaOne"),
    t("webDevelopment:overview.overviewParaTwo"),
    t("webDevelopment:overview.overviewParaThree"),
  ];
};

export const OverviewParagraphComponent = () => {
  return (
    <>
      {para().map((item, index) => (
        <SubTittleTypo key={index} variant="subtitle1" gutterBottom>
          {item}
        </SubTittleTypo>
      ))}
    </>
  );
};
