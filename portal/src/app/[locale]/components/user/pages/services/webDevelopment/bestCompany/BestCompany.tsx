import React from "react";
import { ImageBox, MainBox } from "./styled";
import { Box, Container, Grid } from "@mui/material";
import { BestCompanyHeadingAndParaComponent } from "./data";
import ImageMain from "../../../../../../../../../public/bestcompany.webp";
import Image from "next/image";

const BestCompany = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
              <Box>
                <BestCompanyHeadingAndParaComponent />
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
              <ImageBox>
                <Image src={ImageMain} alt="image" height={404} width={384} />
              </ImageBox>
            </Grid>
          </Grid>
        </Container>
      </MainBox>
    </>
  );
};

export default BestCompany;
