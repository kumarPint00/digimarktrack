"use client";
import { useTranslation } from "react-i18next";
import { TypoBody1 } from "./styled";

export const Paragraphs = () => {
  const { t } = useTranslation();
  return [
    t("videoProduction:overView.para1"),
    t("videoProduction:overView.para2"),
    t("videoProduction:overView.para3"),
  ];
};

export const ParagraphComponent = () => {
  return (
    <>
      {Paragraphs().map((item, index) => (
        <TypoBody1 key={index} variant="body1" color="initial">
          {item}
        </TypoBody1>
      ))}
    </>
  );
};
