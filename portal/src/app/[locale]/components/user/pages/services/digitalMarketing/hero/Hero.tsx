import React, { FC } from "react";
import { HeroText, HeroTypoH1, MainBox } from "./styled";
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
            <TranslationAtom word="digitalMarketing:hero.heading" />
          </HeroTypoH1>
        </HeroText>
      </MainBox>
    </>
  );
};

export default Hero;
