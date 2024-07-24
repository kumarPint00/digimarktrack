"use client";
import { useTranslation } from "react-i18next";
import { HeadContentBox, TypoBody1, TypoH5 } from "./styled";

export const BulletPoints = () => {
  const { t } = useTranslation();
  return [
    {
      heading: t("eCommerce:process.process1.heading"),
      content: [
        t("eCommerce:process.process1.text1"),
        t("eCommerce:process.process1.text2"),
        t("eCommerce:process.process1.text3"),
      ],
    },
    {
      heading: t("eCommerce:process.process2.heading"),
      content: [
        t("eCommerce:process.process2.text1"),
        t("eCommerce:process.process2.text2"),
        t("eCommerce:process.process2.text3"),
      ],
    },
    {
      heading: t("eCommerce:process.process3.heading"),
      content: [
        t("eCommerce:process.process3.text1"),
        t("eCommerce:process.process3.text2"),
        t("eCommerce:process.process3.text3"),
      ],
    },
    {
      heading: t("eCommerce:process.process4.heading"),
      content: [
        t("eCommerce:process.process4.text1"),
        t("eCommerce:process.process4.text2"),
        t("eCommerce:process.process4.text3"),
      ],
    },
    {
      heading: t("eCommerce:process.process5.heading"),
      content: [
        t("eCommerce:process.process5.text1"),
        t("eCommerce:process.process5.text2"),
        t("eCommerce:process.process5.text3"),
      ],
    },
  ];
};

export const BulletPointsComponent = () => {
  return (
    <>
      {BulletPoints().map((item, index) => (
        <HeadContentBox key={index}>
          <TypoH5 variant="h5" color="initial">
            {item.heading}
          </TypoH5>
          {item.content.map((item, index) => (
            <TypoBody1 key={index} variant="body1" color="initial">
              {item}
            </TypoBody1>
          ))}
        </HeadContentBox>
      ))}
    </>
  );
};
