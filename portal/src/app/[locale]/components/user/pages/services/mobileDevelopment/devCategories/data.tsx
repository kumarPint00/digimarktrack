"use client";
import { useTranslation } from "react-i18next";
import { IconBox, Typo2 } from "./styled";
import Image from "next/image";
import icon from "../../../../../../../../../public/whychooseus2webp.webp";

export const DevCategoriesList = () => {
  const { t } = useTranslation();
  return [
    t("mobileDevelopment:devCategories.devList.list1"),
    t("mobileDevelopment:devCategories.devList.list2"),
    t("mobileDevelopment:devCategories.devList.list3"),
    t("mobileDevelopment:devCategories.devList.list4"),
    t("mobileDevelopment:devCategories.devList.list5"),
    t("mobileDevelopment:devCategories.devList.list6"),
  ];
};

export const ListAndIconComponent = () => {
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
