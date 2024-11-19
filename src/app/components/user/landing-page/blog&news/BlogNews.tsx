import React from "react";
import { Container, Grid, Box } from "@mui/material";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import {
  BoxGrid,
  CustomBoxCrad,
  CustomMonthYearTypography,
  CustomSnTypography,
  CustomTextTypography,
  CustomTitleTypography,
  GridBox,
  GridCardFirst,
  HeadingBox,
  MainBox,
  SndateBox,
  Typographyh3,
  Typographyh5,
} from "./styled";
import { BlogImg } from "./data";

const BlogNews = () => {
  const t = useTranslations('blogNews');
  const blogCard = useTranslations('BlogCard');
  const blogNewsHeading = t('heading');
  const blogNewsSubheading = t('subheading');

  return (
    <MainBox>
      <Container maxWidth="lg">
        <HeadingBox>
          <Typographyh5 variant="h5" color="initial" gutterBottom>
            {blogNewsHeading}
          </Typographyh5>
          <Typographyh3 variant="h3" color="initial" gutterBottom>
            {blogNewsSubheading}
          </Typographyh3>
        </HeadingBox>
        <GridBox container spacing={3}>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <GridCardFirst>
              <Image
                src={BlogImg[0]}
                alt="image"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </GridCardFirst>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <GridCardFirst>
              <Image
                src={BlogImg[1]}
                alt="image"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </GridCardFirst>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <GridCardFirst>
              <Image
                src={BlogImg[2]}
                alt="image"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </GridCardFirst>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <GridCardFirst>
              <Image
                src={BlogImg[3]}
                alt="image"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </GridCardFirst>
          </Grid>

          <BoxGrid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <CustomBoxCrad index={0}>
              <SndateBox>
                <Box>
                  <CustomSnTypography
                    index={0}
                    variant="body1"
                    color="initial"
                    gutterBottom
                  >
                    {blogCard('0.sn')}
                  </CustomSnTypography>
                </Box>
                <Box>
                  <CustomMonthYearTypography
                    variant="body1"
                    color="initial"
                    gutterBottom
                    index={0}
                  >
                    {blogCard('0.month')}
                  </CustomMonthYearTypography>
                  <CustomMonthYearTypography
                    variant="body1"
                    color="initial"
                    gutterBottom
                    index={0}
                  >
                    {blogCard('0.year')}
                  </CustomMonthYearTypography>
                </Box>
              </SndateBox>
              <CustomTitleTypography
                variant="h4"
                color="initial"
                gutterBottom
                index={0}
              >
                {blogCard('0.title')}
              </CustomTitleTypography>
              <CustomTextTypography
                variant="body2"
                color="initial"
                gutterBottom
                index={0}
              >
                {blogCard('0.text')}
              </CustomTextTypography>
            </CustomBoxCrad>
          </BoxGrid>

          <BoxGrid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <CustomBoxCrad index={1}>
              <SndateBox>
                <Box>
                  <CustomSnTypography
                    index={1}
                    variant="body1"
                    color="initial"
                    gutterBottom
                  >
                    {blogCard('1.sn')}
                  </CustomSnTypography>
                </Box>
                <Box>
                  <CustomMonthYearTypography
                    variant="body1"
                    color="initial"
                    gutterBottom
                    index={1}
                  >
                    {blogCard('1.month')}
                  </CustomMonthYearTypography>
                  <CustomMonthYearTypography
                    variant="body1"
                    color="initial"
                    gutterBottom
                    index={1}
                  >
                    {blogCard('1.year')}
                  </CustomMonthYearTypography>
                </Box>
              </SndateBox>
              <CustomTitleTypography
                variant="h4"
                color="initial"
                gutterBottom
                index={1}
              >
                {blogCard('1.title')}
              </CustomTitleTypography>
              <CustomTextTypography
                variant="body2"
                color="initial"
                gutterBottom
                index={1}
              >
                {blogCard('1.text')}
              </CustomTextTypography>
            </CustomBoxCrad>
          </BoxGrid>
        </GridBox>
      </Container>
    </MainBox>
  );
};

export default BlogNews;
