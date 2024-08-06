import React from "react";
import { Box, Container } from "@mui/material";
import { Typographyh5 } from "../jobsInDubai/dataAndStyled";
import { InternshipDetailsComponent } from "./data";
import { TranslationAtom } from "@/components/TranslationAtom";

const Internship = () => {
  return (
    <>
      <Box>
        <Container maxWidth="xl">
          <Typographyh5 variant="h6" color="initial" gutterBottom>
            <TranslationAtom word="career:internship.heading" />
          </Typographyh5>
          <InternshipDetailsComponent />
        </Container>
      </Box>
    </>
  );
};

export default Internship;
