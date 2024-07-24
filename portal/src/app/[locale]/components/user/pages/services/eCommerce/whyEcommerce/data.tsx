"use client";
import { useTranslation } from "react-i18next";
import { HeadContentBox, TypoBody1, TypoH5 } from "./styled";

export const Paragraph = () => {
  const { t } = useTranslation();
  return [
    t("eCommerce:whyEcommerce.para1"),
    t("eCommerce:whyEcommerce.para2"),
    t("eCommerce:whyEcommerce.para3"),
  ];
};

export const BulletPoints = () => {
  const { t } = useTranslation();
  return [
    {
      heading: t("eCommerce:whyEcommerce.bulletPoints.bulletPoints1.heading"),
      content: [
        t("eCommerce:whyEcommerce.bulletPoints.bulletPoints1.para1"),
        t("eCommerce:whyEcommerce.bulletPoints.bulletPoints1.para2"),
      ],
    },
    {
      heading: t("eCommerce:whyEcommerce.bulletPoints.bulletPoints2.heading"),
      content: [
        t("eCommerce:whyEcommerce.bulletPoints.bulletPoints2.para1"),
        t("eCommerce:whyEcommerce.bulletPoints.bulletPoints2.para2"),
      ],
    },
    {
      heading: t("eCommerce:whyEcommerce.bulletPoints.bulletPoints3.heading"),
      content: [
        t("eCommerce:whyEcommerce.bulletPoints.bulletPoints3.para1"),
        t("eCommerce:whyEcommerce.bulletPoints.bulletPoints3.para2"),
      ],
    },
    {
      heading: t("eCommerce:whyEcommerce.bulletPoints.bulletPoints4.heading"),
      content: [
        t("eCommerce:whyEcommerce.bulletPoints.bulletPoints4.para1"),
        t("eCommerce:whyEcommerce.bulletPoints.bulletPoints4.para2"),
      ],
    },
    {
      heading: t("eCommerce:whyEcommerce.bulletPoints.bulletPoints5.heading"),
      content: [
        t("eCommerce:whyEcommerce.bulletPoints.bulletPoints5.para1"),
        t("eCommerce:whyEcommerce.bulletPoints.bulletPoints5.para2"),
      ],
    },
    {
      heading: t("eCommerce:whyEcommerce.bulletPoints.bulletPoints6.heading"),
      content: [
        t("eCommerce:whyEcommerce.bulletPoints.bulletPoints6.para1"),
        t("eCommerce:whyEcommerce.bulletPoints.bulletPoints6.para2"),
      ],
    },
  ];
};

export const ParagraphComponent = () => {
  return (
    <>
      {Paragraph().map((item, index) => (
        <TypoBody1 key={index} variant="body1" color="initial">
          {item}
        </TypoBody1>
      ))}
    </>
  );
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
