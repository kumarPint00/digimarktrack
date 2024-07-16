"use client";
import { useTranslation } from "react-i18next";
import { LeftSectionTypo } from "./styled";

export const GridData = () => {
  const { t } = useTranslation();
  return [
    {
      icon: "/customer-support (1) 1.webp",
      heading: t("mobileDevelopment:business.customGrid.heading1"),
      text: t("mobileDevelopment:business.customGrid.text1"),
    },
    {
      icon: "/back-in-time 1.webp",
      heading: t("mobileDevelopment:business.customGrid.heading2"),
      text: t("mobileDevelopment:business.customGrid.text2"),
    },
    {
      icon: "/on-time 1.webp",
      heading: t("mobileDevelopment:business.customGrid.heading3"),
      text: t("mobileDevelopment:business.customGrid.text3"),
    },
  ];
};

export const LeftSectoionText = () => {
  const { t } = useTranslation();
  return [
    t("mobileDevelopment:business.para.para1"),
    t("mobileDevelopment:business.para.para2"),
  ];
};

export const ParagraphComponent = () => {
  return (
    <>
      {LeftSectoionText().map((item, index) => (
        <LeftSectionTypo key={index} variant="body1" color="initial">
          {item}
        </LeftSectionTypo>
      ))}
    </>
  );
};
