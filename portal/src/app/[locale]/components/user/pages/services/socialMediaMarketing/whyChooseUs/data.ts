"use client";

import { useTranslation } from "react-i18next";

export const GridData = () => {
  const { t } = useTranslation();
  return [
    {
      icon: "/why1.webp",
      heading: t("socialMediaMarketing:whyChooseUs.gridData.heading1"),
      text: t("socialMediaMarketing:whyChooseUs.gridData.para1"),
    },
    {
      icon: "/why2.webp",
      heading: t("socialMediaMarketing:whyChooseUs.gridData.heading2"),
      text: t("socialMediaMarketing:whyChooseUs.gridData.para2"),
    },
    {
      icon: "/why3.webp",
      heading: t("socialMediaMarketing:whyChooseUs.gridData.heading3"),
      text: t("socialMediaMarketing:whyChooseUs.gridData.para3"),
    },
  ];
};
