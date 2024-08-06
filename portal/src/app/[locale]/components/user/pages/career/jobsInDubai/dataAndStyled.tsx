"use client";
import { TranslationAtom } from "@/components/TranslationAtom";
import { Box, Button, styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const Typographyh5 = styled(Typography)(({ theme }) => ({
  backgroundColor: "white",
  color: "#932889",
  padding: "5px 0px",
  textAlign: "center",
  width: "100%",
  fontSize: "1.7rem",
  fontFamily: "Righteous, sans-serif",
  marginBottom: "0rem",
}));

export const TypoH5 = styled(Typography)(({ theme }) => ({
  fontFamily: "Righteous, sans-serif",
  color: "black",
  width: "100%",
  textAlign: "center",
  marginBottom: "0.5rem",
}));

export const Typosubtitle1 = styled(Typography)(({ theme }) => ({
  fontFamily: "Righteous, sans-serif",
  color: "black",
}));

export const JobBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#d3d3d354",
  padding: "0.5rem 5rem",
  borderRadius: "3px",
  marginBottom: "1rem",
  [theme.breakpoints.down("sm")]: {
    padding: "0.5rem 1rem",
  },
}));
export const ButtonBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    textAlign: "right",
    columnGap: "5px",
  },
}));

export const JobButton = styled(Button)(({ theme }) => ({
  backgroundColor: "white",
  color: "orange",
  marginLeft: "1rem",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "white",
  },
}));

export const JobsData = () => {
  const { t } = useTranslation();
  return [
    t("career:jobsInDubai.job1"),
    t("career:jobsInDubai.job2"),
    t("career:jobsInDubai.job3"),
    t("career:jobsInDubai.job4"),
    t("career:jobsInDubai.job5"),
  ];
};

export const JobsComponent = () => {
  return (
    <>
      {JobsData().map((item, index) => (
        <JobBox key={index}>
          <Box>
            <Typosubtitle1 variant="subtitle1" color="initial">
              {item}
            </Typosubtitle1>
          </Box>
          <ButtonBox>
            <JobButton>
              <TranslationAtom word="career:jobsInDubai.button1" />
            </JobButton>
            <JobButton>
              <TranslationAtom word="career:jobsInDubai.button2" />
            </JobButton>
          </ButtonBox>
        </JobBox>
      ))}
    </>
  );
};
