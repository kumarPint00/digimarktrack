import { Box, Container } from "@mui/material";
import React from "react";
import { HeadTypo, MainBox, SubTittleTypo } from "./styled";
import { textData } from "./data";

const Benefits = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="lg">
          <HeadTypo variant="h4" gutterBottom>
            Benefits of Using Websites
          </HeadTypo>
          {textData.map((item, index) => (
            <SubTittleTypo key={index} variant="subtitle1" gutterBottom>
              <span style={{ fontWeight: "bold" }}>{item.boldtext}</span>{" "}
              {item.text}
            </SubTittleTypo>
          ))}
        </Container>
      </MainBox>
    </>
  );
};

export default Benefits;