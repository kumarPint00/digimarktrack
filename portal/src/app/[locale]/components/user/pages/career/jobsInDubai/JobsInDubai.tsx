import React from "react";
import { Box, Container } from "@mui/material";
import { JobsComponent, Typographyh5, TypoH5 } from "./dataAndStyled";
import { TranslationAtom } from "@/components/TranslationAtom";

const JobsInDubai = () => {
  return (
    <>
      <Box>
        <Container maxWidth="xl">
          <Typographyh5 variant="h6" color="initial" gutterBottom>
            <TranslationAtom word="career:jobsInDubai.heading" />
          </Typographyh5>
          <TypoH5 variant="h5" color="initial">
          <TranslationAtom word="career:jobsInDubai.subHeading" />
          </TypoH5>
          <JobsComponent />
        </Container>
      </Box>
    </>
  );
};

export default JobsInDubai;
