"use client";
import { useTranslation } from "react-i18next";
import { IconBox, Typo2 } from "./styled";
import Image from "next/image";
import icon from "../../../../../../../../../public/whychooseus2webp.webp";

export const DevCategoriesList = () => {
  const { t } = useTranslation();
  return [
    t("videoProduction:devCategories.list.list1"),
    t("videoProduction:devCategories.list.list2"),
    t("videoProduction:devCategories.list.list3"),
    t("videoProduction:devCategories.list.list4"),
    t("videoProduction:devCategories.list.list5"),
    t("videoProduction:devCategories.list.list6"),
  ];
};

export const ListComponent = () => {
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