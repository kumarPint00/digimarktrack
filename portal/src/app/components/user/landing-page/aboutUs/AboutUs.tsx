import { Container, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import Imagegrid1 from "../../../../../../public/Rectangle 9.png";
import Imagegrid2 from "../../../../../../public/Rectangle 7.png";
import ImageGrid3 from "../../../../../../public/imageGrid.png";
import {
  AboutUsBox,
  CheckIconBox,
  CheckIconTypography,
  ExpTypography,
  IconBox,
  IconGrid,
  IconTypography,
  MainBox,
  Typographybody2,
  Typographyh3,
  Typographyh5,
} from "./styled";

const AboutUs = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <AboutUsBox>
                <Typographyh5 variant="h5" color="initial" gutterBottom>
                  About us
                </Typographyh5>
                <Typographyh3 variant="h3" color="initial" gutterBottom>
                  We Want to give you The Best Service
                </Typographyh3>
                <Typographybody2 variant="body2" color="initial" gutterBottom>
                  We are 100+ professional software engineers with more than 10
                  years of experience in delivering superior products Believe it
                  because you&apos;ve seen it. Here are real numbers
                </Typographybody2>
                <IconGrid container spacing={3}>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <IconBox>
                      <Image
                        src="/save-money 1.png"
                        alt="image"
                        height={50}
                        width={50}
                        style={{
                          backgroundColor: "#6907A8",
                          padding: "10px",
                          borderRadius: "7px",
                        }}
                      />

                      <IconTypography
                        variant="body2"
                        color="initial"
                        gutterBottom
                      >
                        We Can Save Your Money
                      </IconTypography>
                    </IconBox>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <IconBox>
                      <Image
                        src="/save-time 1.png"
                        alt="image"
                        height={50}
                        width={50}
                        style={{
                          backgroundColor: "#6907A8",
                          padding: "10px",
                          borderRadius: "7px",
                        }}
                      />

                      <IconTypography
                        variant="body2"
                        color="initial"
                        gutterBottom
                      >
                        Promiss Specific Timeline Guarantee
                      </IconTypography>
                    </IconBox>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <CheckIconBox>
                      <Image
                        src="/Check.png"
                        alt="image"
                        height={25}
                        width={25}
                      />
                      <CheckIconTypography
                        variant="body2"
                        color="initial"
                        gutterBottom
                      >
                        Production Or Trading Of Good
                      </CheckIconTypography>
                    </CheckIconBox>
                    <CheckIconBox>
                      <Image
                        src="/Check.png"
                        alt="image"
                        height={25}
                        width={25}
                      />
                      <CheckIconTypography
                        variant="body2"
                        color="initial"
                        gutterBottom
                      >
                        100% Better Results
                      </CheckIconTypography>
                    </CheckIconBox>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <IconBox>
                      <Image
                        src="/aboutcall.png"
                        alt="image"
                        height={50}
                        width={50}
                        style={{
                          backgroundColor: "#6907A8",
                          padding: "10px",
                          borderRadius: "7px",
                        }}
                      />

                      <IconTypography
                        variant="body2"
                        color="initial"
                        gutterBottom
                      >
                        (0000) 54 7556
                        <br />
                        <span
                          style={{
                            fontSize: "small",
                            fontWeight: 500,
                            color: "#6907a8",
                          }}
                        >
                          Have any Question?
                        </span>
                      </IconTypography>
                    </IconBox>
                  </Grid>
                </IconGrid>
              </AboutUsBox>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <ExpTypography variant="body1" color="initial" gutterBottom>
                    5+ Years of Working Experience
                  </ExpTypography>
                  <Image
                    src={Imagegrid1}
                    alt="image"
                    style={{
                      height: "386px",
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <Image
                    src={Imagegrid2}
                    alt="image"
                    style={{
                      height: "190px",
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                  <Image
                    src={ImageGrid3}
                    alt="image"
                    style={{
                      height: "190px",
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
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
