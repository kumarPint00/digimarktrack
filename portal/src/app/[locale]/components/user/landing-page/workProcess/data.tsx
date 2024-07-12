"use client";
import { Box, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const GridOneData = () => {
  const { t } = useTranslation();
  return [
    {
      title: t("landingPage:workProcess.gridOneData.title1"),
      pata: t("landingPage:workProcess.gridOneData.para1"),
      image: "1",
      color: "#9B1C00",
    },
    {
      title: t("landingPage:workProcess.gridOneData.title2"),
      pata: t("landingPage:workProcess.gridOneData.para2"),
      image: "3",
      color: "#728940",
    },
    {
      title: t("landingPage:workProcess.gridOneData.title3"),
      pata: t("landingPage:workProcess.gridOneData.para3"),
      image: "5",
      color: "#7233BE",
    },
  ];
};

export const GridTwoData = () => {
  const { t } = useTranslation();
  return [
    {
      title: t("landingPage:workProcess.gridTwoData.title1"),
      pata: t("landingPage:workProcess.gridTwoData.para1"),
      image: "2",
      color: "#F5432A",
    },
    {
      title: t("landingPage:workProcess.gridTwoData.title1"),
      pata: t("landingPage:workProcess.gridTwoData.para1"),
      image: "4",
      color: "#0A62C9",
    },
  ];
};

export const GridOneComponent = () => {
  return (
    <>
      {GridOneData().map((item, index) => (
        <Grid key={index} item xs={12} sm={4} md={4} lg={4} xl={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              columnGap: "15px",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "4rem",
                  fontWeight: "600",
                  color: item.color,
                }}
                variant="h2"
                color="initial"
              >
                {item.image}
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: item.color,
                  fontFamily: "Righteous,sans-serif",
                }}
                variant="h5"
                color="initial"
              >
                {item.title}
              </Typography>
              <Typography
                sx={{ fontWeight: "600" }}
                variant="body2"
                color="initial"
              >
                {item.pata}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </>
  );
};

export const GridTwoComponent = () => {
  return (
    <>
      {GridTwoData().map((item, index) => (
        <Grid key={index} item xs={12} sm={4} md={4} lg={4} xl={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              columnGap: "15px",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "4rem",
                  fontWeight: "600",
                  color: item.color,
                }}
                variant="h2"
                color="initial"
              >
                {item.image}
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: item.color,
                  fontFamily: "Righteous,sans-serif",
                }}
                variant="h5"
                color="initial"
              >
                {item.title}
              </Typography>
              <Typography
                sx={{ fontWeight: "600" }}
                variant="body2"
                color="initial"
              >
                {item.pata}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </>
  );
};
