import { Grid, Container } from "@mui/material";
import React from "react";
import Image from "next/image";
import {
  GridBox,
  GridCardFirst,
  HeadingBox,
  MainBox,
  Typographyh3,
  Typographyh5,
} from "./styled";
import BlogAndNewsCards from "./data";
import { TranslationAtom } from "@/components/TranslationAtom";
import blog1 from "../../../../../../../public/blog1webp.webp";
import blog2 from "../../../../../../../public/blog2webp.webp";

const BlogImg = [blog1, blog2];

const BlogNews = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="lg">
          <HeadingBox>
            <Typographyh5 variant="h5" color="initial" gutterBottom>
              <TranslationAtom word="landingPage:blogAndNews.mainHeading" />
            </Typographyh5>
            <Typographyh3 variant="h3" color="initial" gutterBottom>
              <TranslationAtom word="landingPage:blogAndNews.heading" />
            </Typographyh3>
          </HeadingBox>
          <GridBox container spacing={3}>
            {BlogImg.map((item, index) => (
              <Grid key={index} item xs={12} sm={6} md={6} lg={6} xl={6}>
                <GridCardFirst>
                  <Image
                    src={item}
                    alt="image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </GridCardFirst>
              </Grid>
            ))}
            <BlogAndNewsCards />
          </GridBox>
        </Container>
      </MainBox>
    </>
  );
};

export default BlogNews;
