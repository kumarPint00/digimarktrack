"use client";
import { useTranslation } from "react-i18next";
import { IconBox, Typo2 } from "./styled";
import Image from "next/image";
import icon from "../../../../../../../../../public/whychooseus2webp.webp";

export const DevCategoriesList = () => {
  const { t } = useTranslation();
  return [
    t("webDevelopment:devCategories.list1"),
    t("webDevelopment:devCategories.list2"),
    t("webDevelopment:devCategories.list3"),
    t("webDevelopment:devCategories.list4"),
    t("webDevelopment:devCategories.list5"),
    t("webDevelopment:devCategories.list6"),
  ];
};

export const DevCategoriesListComponent = () => {
  return (
    <>
      {DevCategoriesList().map((item, index) => (
        <IconBox key={index}>
          <Image src={icon} alt="icon" height={25} width={25} />
          <Typo2 variant="body1" color="initial">
            {item}
          </Typo2>
        </IconBox>
      ))}
    </>
  );
};
