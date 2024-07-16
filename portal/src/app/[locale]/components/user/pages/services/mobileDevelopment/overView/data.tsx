"use client";
import { useTranslation } from "react-i18next";
import { SubTittleTypo } from "./styled";

export const Para = () => {
  const { t } = useTranslation();
  return [
    t("mobileDevelopment:overView.para.para1"),
    t("mobileDevelopment:overView.para.para2"),
  ];
};

export const OverViewParagraphComponent = () => {
  return (
    <>
      {Para().map((item, index) => (
        <SubTittleTypo key={index} variant="subtitle1" gutterBottom>
          {item}
        </SubTittleTypo>
      ))}
    </>
  );
};
