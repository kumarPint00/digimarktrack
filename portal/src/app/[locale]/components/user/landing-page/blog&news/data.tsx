"use client";
import { Box } from "@mui/material";
import {
  BoxGrid,
  CustomBoxCrad,
  CustomMonthYearTypography,
  CustomSnTypography,
  CustomTextTypography,
  CustomTitleTypography,
  SndateBox,
} from "./styled";
import { useTranslation } from "react-i18next";


export const BlogCard = () => {
  const { t } = useTranslation();
  return [
    {
      sn: "01",
      month: t("landingPage:blogAndNews.blogAndNewsCards.month1"),
      year: "2024",
      title: t("landingPage:blogAndNews.blogAndNewsCards.title1"),
      text: t("landingPage:blogAndNews.blogAndNewsCards.text1"),
    },
    {
      sn: "02",
      month: t("landingPage:blogAndNews.blogAndNewsCards.month1"),
      year: "2024",
      title: t("landingPage:blogAndNews.blogAndNewsCards.title2"),
      text: t("landingPage:blogAndNews.blogAndNewsCards.text2"),
    },
  ];
};

const BlogAndNewsCards = () => {
  return (
    <>
      {BlogCard().map((item, index) => (
        <BoxGrid key={index} item xs={12} sm={6} md={6} lg={6} xl={6}>
          <CustomBoxCrad index={index}>
            <SndateBox>
              <Box>
                <CustomSnTypography
                  index={index}
                  variant="body1"
                  color="initial"
                  gutterBottom
                >
                  {item.sn}
                </CustomSnTypography>
              </Box>
              <Box>
                <CustomMonthYearTypography
                  variant="body1"
                  color="initial"
                  gutterBottom
                  index={index}
                >
                  {item.month}
                </CustomMonthYearTypography>
                <CustomMonthYearTypography
                  variant="body1"
                  color="initial"
                  gutterBottom
                  index={index}
                >
                  {item.year}
                </CustomMonthYearTypography>
              </Box>
            </SndateBox>
            <CustomTitleTypography
              variant="h4"
              color="initial"
              gutterBottom
              index={index}
            >
              {item.title}
            </CustomTitleTypography>
            <CustomTextTypography
              variant="body2"
              color="initial"
              gutterBottom
              index={index}
            >
              {item.text}
            </CustomTextTypography>
          </CustomBoxCrad>
        </BoxGrid>
      ))}
    </>
  );
};

export default BlogAndNewsCards;
