"use client";
import { Box, Grid } from "@mui/material";
import { GridData } from "../../socialMediaMarketing/whyChooseUs/data";
import {
  GridComponentBox,
  GridComponentHeading,
  GridComponentImageBox,
  GridComponentText,
} from "./styled";
import Image from "next/image";

export const GridComponent = () => {
  return (
    <>
      {GridData().map((item, index) => (
        <Grid key={index} item xs={12} sm={6} md={6} lg={6} xl={6}>
          <GridComponentBox>
            <GridComponentImageBox>
              <Image src={item.icon} alt="image" height={50} width={50} />
            </GridComponentImageBox>
            <Box>
              <GridComponentHeading variant="h6" color="initial">
                {item.heading}
              </GridComponentHeading>
              <GridComponentText variant="body2" color="initial">
                {item.text}
              </GridComponentText>
            </Box>
          </GridComponentBox>
        </Grid>
      ))}
    </>
  );
};
