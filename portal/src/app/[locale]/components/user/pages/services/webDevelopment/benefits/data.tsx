"use client";
import { useTranslation } from "react-i18next";
import { SubTittleTypo } from "./styled";

export const TextData = () => {
  const { t } = useTranslation();
  return [
    { text: t("webDevelopment:benefits.text1") },
    {
      boldtext: t("webDevelopment:benefits.boldText1"),
      text: t("webDevelopment:benefits.text2"),
    },
    {
      boldtext: t("webDevelopment:benefits.boldText2"),
      text: t("webDevelopment:benefits.text3"),
    },
    {
      boldtext: t("webDevelopment:benefits.boldText3"),
      text: t("webDevelopment:benefits.text4"),
    },
    {
      boldtext: t("webDevelopment:benefits.boldText4"),
      text: t("webDevelopment:benefits.text5"),
    },
    {
      boldtext: t("webDevelopment:benefits.boldText5"),
      text: t("webDevelopment:benefits.text6"),
    },
    {
      text: t("webDevelopment:benefits.text7"),
    },
  ];
};

export const BenefitsTextComponent = () => {
  return (
    <>
      {TextData().map((item, index) => (
        <SubTittleTypo key={index} variant="subtitle1" gutterBottom>
          <span style={{ fontFamily: "Righteous, sans-serif" }}>
            {item.boldtext}
          </span>{" "}
          {item.text}
        </SubTittleTypo>
      ))}
    </>
  );
};
