"use client";
import { useTranslation } from "react-i18next";

export const TranslationAtom: any = (props:any) => {
  const { word } = props;
  const { t } = useTranslation();
  return <>{t(word)}</>;
};