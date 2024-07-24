"use client";
import { useTranslation } from "react-i18next";
import { HeadContentBox, TypoBody1, TypoH5 } from "./styled";

export const WhyChooseContent = () => {
  const { t } = useTranslation();
  return [
    {
      heading: t("softwareDevelopment:whyChooseUs.whyChooseContent.heading1"),
      content: t("softwareDevelopment:whyChooseUs.whyChooseContent.content1"),
    },
    {
      heading: t("softwareDevelopment:whyChooseUs.whyChooseContent.heading2"),
      content: t("softwareDevelopment:whyChooseUs.whyChooseContent.content2"),
    },
    {
      heading: t("softwareDevelopment:whyChooseUs.whyChooseContent.heading3"),
      content: t("softwareDevelopment:whyChooseUs.whyChooseContent.content3"),
    },
    {
      heading: t("softwareDevelopment:whyChooseUs.whyChooseContent.heading4"),
      content: t("softwareDevelopment:whyChooseUs.whyChooseContent.content4"),
    },
    {
      heading: t("softwareDevelopment:whyChooseUs.whyChooseContent.heading5"),
      content: t("softwareDevelopment:whyChooseUs.whyChooseContent.content5"),
    },
    {
      heading: t("softwareDevelopment:whyChooseUs.whyChooseContent.heading6"),
      content: t("softwareDevelopment:whyChooseUs.whyChooseContent.content6"),
    },
  ];
};

export const WhyChooseContentComponent = () => {
  return (
    <>
      {WhyChooseContent().map((item, index) => (
        <HeadContentBox key={index}>
          <TypoH5 variant="h5" color="initial">
            {item.heading}
          </TypoH5>
          <TypoBody1 variant="body1" color="initial">
            {item.content}
          </TypoBody1>
        </HeadContentBox>
      ))}
    </>
  );
};
