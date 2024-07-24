"use client";
import { useTranslation } from "react-i18next";
import { TypoBody1 } from "./styled";

export const Paragraphs = () => {
  const { t } = useTranslation();
  return [
    t("itConsulting:overView.para1"),
    t("itConsulting:overView.para2"),
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
