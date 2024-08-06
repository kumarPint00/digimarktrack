"use client";
import { Box, styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const InternshipDetails = () => {
  const { t } = useTranslation();
  return [
    {
      heading: t("career:internship.subHeadings.heading1"),
      para: [
        t("career:internship.para.para1"),
        t("career:internship.para.para2"),
        t("career:internship.para.para3"),
      ],
    },
    {
      heading: t("career:internship.subHeadings.heading2"),
      para: [t("career:internship.para.para4")],
    },
    {
      heading: t("career:internship.subHeadings.heading3"),
      para: [t("career:internship.para.para5")],
    },
    {
      heading: t("career:internship.subHeadings.heading4"),
      para: [
        t("career:internship.para.para6"),
        t("career:internship.para.para7"),
        t("career:internship.para.para8"),
        t("career:internship.para.para9"),
      ],
    },
  ];
};

export const Typosubtitle1 = styled(Typography)(({ theme }) => ({
  fontFamily: "Righteous, sans-serif",
  color: "black",
  fontSize: "1.3rem",
}));

export const InternshipDetailsComponent = () => {
  return (
    <>
      {InternshipDetails().map((item, index) => (
        <Box key={index}>
          <Typosubtitle1 variant="subtitle1" color="initial" gutterBottom>
            {item.heading}
          </Typosubtitle1>
          {item.para.map((item, index) => (
            <Typography
              key={index}
              variant="body1"
              color="initial"
              gutterBottom
            >
              {item}
            </Typography>
          ))}
        </Box>
      ))}
    </>
  );
};
