import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import workProcessImg from "../../../../../../public/workProcessImg.webp";
import { HeadingBox, MainBox, Typographyh3, Typographyh5 } from "./styled";

const WorkProcess = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <HeadingBox>
            <Typographyh5 variant="h5" color="initial" gutterBottom>
              Work Process
            </Typographyh5>
            <Typographyh3 variant="h3" color="initial" gutterBottom>
              Our Work Process
            </Typographyh3>
          </HeadingBox>
        </Container>
        <Image
          src={workProcessImg}
          alt="image"
          style={{ height: "100%", width: "100%" }}
        />
      </MainBox>
    </>
  );
};

export default WorkProcess;
