import React from "react";
import { Container } from "@mui/material";
import { MainBox } from "./styled";
import { BulletPointsComponent } from "./data";

const Process = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <BulletPointsComponent />
        </Container>
      </MainBox>
    </>
  );
};

export default Process;
