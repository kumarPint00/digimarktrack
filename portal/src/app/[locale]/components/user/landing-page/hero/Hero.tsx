import React, { FC } from "react";
import {
  HeroButton,
  HeroButtonBox,
  HeroText,
  HeroTypobody2,
  HeroTypoH1,
  MainBox,
} from "./styled";
import { TranslationAtom } from "@/components/TranslationAtom";
export interface HeroProps {
  text?: string;
}

const Hero: FC<HeroProps> = (props) => {
  return (
    <>
      <MainBox>
        <HeroText>
          <HeroTypoH1 variant="h1" color="initial" gutterBottom>
            <TranslationAtom word="landingPage:hero.title" />
          </HeroTypoH1>
          <HeroTypobody2 variant="body2" color="initial" gutterBottom>
            <TranslationAtom word="landingPage:hero.para" />
          </HeroTypobody2>
          <HeroButtonBox>
            <HeroButton>
              <TranslationAtom word="landingPage:hero.button" />
            </HeroButton>
          </HeroButtonBox>
        </HeroText>
      </MainBox>
    </>
  );
};

export default Hero;
