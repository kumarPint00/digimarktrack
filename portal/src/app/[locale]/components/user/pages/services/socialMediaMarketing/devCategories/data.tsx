"use client";
import { useTranslation } from "react-i18next";
import { IconBox, Typo2 } from "./styled";
import Image from "next/image";
import icon from "../../../../../../../../../public/whychooseus2webp.webp";

export const DevCategoriesList = () => {
  const { t } = useTranslation();
  return [
    t("socialMediaMarketing:devCategories.list.list1"),
    t("socialMediaMarketing:devCategories.list.list2"),
    t("socialMediaMarketing:devCategories.list.list3"),
    t("socialMediaMarketing:devCategories.list.list4"),
    t("socialMediaMarketing:devCategories.list.list5"),
    t("socialMediaMarketing:devCategories.list.list6"),
    t("socialMediaMarketing:devCategories.list.list7"),
    t("socialMediaMarketing:devCategories.list.list8"),
    t("socialMediaMarketing:devCategories.list.list9"),
  ];
};

export const Listcomponent = () => {
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
