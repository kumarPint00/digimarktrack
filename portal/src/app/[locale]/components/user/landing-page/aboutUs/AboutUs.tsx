import { Container, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import Imagegrid1 from "../../../../../../../public/Rectangle 9webp.webp";
import Imagegrid2 from "../../../../../../../public/Rectangle 7webp.webp";
import ImageGrid3 from "../../../../../../../public/imageGridwebp.webp";
import {
  AboutUsBox,
  CheckIconBox,
  CheckIconTypography,
  ExpTypography,
  IconBox,
  IconGrid,
  IconTypography,
  Image1,
  Image2,
  Image3,
  MainBox,
  Typographybody2,
  Typographyh3,
  Typographyh5,
} from "./styled";
import { TranslationAtom } from "@/components/TranslationAtom";

const AboutUs = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <AboutUsBox>
                <Typographyh5 variant="h6" color="initial" gutterBottom>
                  <TranslationAtom word="landingPage:aboutUs.mainHeading" />
                </Typographyh5>
                <Typographyh3 variant="h3" color="initial" gutterBottom>
                  <TranslationAtom word="landingPage:aboutUs.heading" />
                </Typographyh3>
                <Typographybody2 variant="body2" color="initial" gutterBottom>
                  <TranslationAtom word="landingPage:aboutUs.para" />
                </Typographybody2>
                <IconGrid container spacing={3}>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <IconBox>
                      <Image1
                        src="/save-money 1webp.webp"
                        alt="image"
                        height={50}
                        width={50}
                      />
                      <IconTypography
                        variant="body2"
                        color="initial"
                        gutterBottom
                      >
                        <TranslationAtom word="landingPage:aboutUs.gridHeadingOne" />
                      </IconTypography>
                    </IconBox>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <IconBox>
                      <Image1
                        src="/save-time 1webp.webp"
                        alt="image"
                        height={50}
                        width={50}
                      />

                      <IconTypography
                        variant="body2"
                        color="initial"
                        gutterBottom
                      >
                        <TranslationAtom word="landingPage:aboutUs.gridHeadingTwo" />
                      </IconTypography>
                    </IconBox>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <CheckIconBox>
                      <Image
                        src="/Checkwebp.webp"
                        alt="image"
                        height={25}
                        width={25}
                      />
                      <CheckIconTypography
                        variant="body2"
                        color="initial"
                        gutterBottom
                      >
                        <TranslationAtom word="landingPage:aboutUs.gridTextOne" />
                      </CheckIconTypography>
                    </CheckIconBox>
                    <CheckIconBox>
                      <Image
                        src="/Checkwebp.webp"
                        alt="image"
                        height={25}
                        width={25}
                      />
                      <CheckIconTypography
                        variant="body2"
                        color="initial"
                        gutterBottom
                      >
                        <TranslationAtom word="landingPage:aboutUs.gridTextTwo" />
                      </CheckIconTypography>
                    </CheckIconBox>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <IconBox>
                      <Image1
                        src="/aboutcallwebp.webp"
                        alt="image"
                        height={50}
                        width={50}
                      />
                      <IconTypography
                        variant="body2"
                        color="initial"
                        gutterBottom
                      >
                        (0000) 54 7556
                        <br />
                        <span className="aboutUsLinkSpan">
                          <TranslationAtom word="landingPage:aboutUs.girdLink" />
                        </span>
                      </IconTypography>
                    </IconBox>
                  </Grid>
                </IconGrid>
              </AboutUsBox>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Grid container spacing={1}>
                <Grid
                  sx={{ position: "relative" }}
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={6}
                  xl={6}
                >
                  <ExpTypography variant="body1" color="initial" gutterBottom>
                    <TranslationAtom word="landingPage:aboutUs.experience" />
                  </ExpTypography>
                  <Image2 src={Imagegrid1} alt="image" />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <Image3 src={Imagegrid2} alt="image" />
                  <Image3 src={ImageGrid3} alt="image" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </MainBox>
    </>
  );
};

export default AboutUs;