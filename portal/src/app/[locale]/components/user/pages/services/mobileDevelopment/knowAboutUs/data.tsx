"use client";
import { useTranslation } from "react-i18next";
import { SubTittleTypo } from "./styled";

export const Para = () => {
  const { t } = useTranslation();
  return [
    t("mobileDevelopment:knowAboutUs.para.para1"),
    t("mobileDevelopment:knowAboutUs.para.para2"),
  ];
};

export const KnowAboutUsParaComponent = () => {
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
