"use client";
import { useTranslation } from "react-i18next";
import { HeadTypo, SubTittleTypo } from "./styled";

export const headings = () => {
  const { t } = useTranslation();
  return [
    t("webDevelopment:bestCompany.heading1"),
    t("webDevelopment:bestCompany.heading2"),
  ];
};

export const para = () => {
  const { t } = useTranslation();
  return [
    t("webDevelopment:bestCompany.para.para1"),
    t("webDevelopment:bestCompany.para.para2"),
    t("webDevelopment:bestCompany.para.para3"),
    t("webDevelopment:bestCompany.para.para4"),
    t("webDevelopment:bestCompany.para.para5"),
  ];
};

export const BestCompanyHeadingAndParaComponent = () => {
  return (
    <>
      {headings().map((item, index) => (
        <HeadTypo
          key={index}
          variant="h4"
          gutterBottom
          color={index === 0 ? "#000000" : "#6907A8"}
        >
          {item}
        </HeadTypo>
      ))}
      {para().map((item, index) => (
        <SubTittleTypo key={index} variant="subtitle1" gutterBottom>
          {item}
        </SubTittleTypo>
      ))}
    </>
  );
};
