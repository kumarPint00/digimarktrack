import React from "react";
import { TextField } from "@mui/material";
import { FormBox, FormButton, TextfieldBox } from "./styled";
import { textfieldData } from "./data";
import { TranslationAtom } from "@/components/TranslationAtom";

const Form = () => {
  return (
    <>
      <FormBox>
        {textfieldData.map((item, index) => (
          <TextfieldBox key={index}>
            <TextField
              size="small"
              fullWidth
              placeholder={item}
              variant="outlined"
            />
          </TextfieldBox>
        ))}
        <TextfieldBox>
          <TextField
            size="small"
            placeholder="Your Message"
            multiline
            fullWidth
            rows={4}
          />
        </TextfieldBox>
        <FormButton variant="contained" size="small">
          <TranslationAtom word="webDevelopment:formComponent.button" />
        </FormButton>
      </FormBox>
    </>
  );
};

export default Form;
