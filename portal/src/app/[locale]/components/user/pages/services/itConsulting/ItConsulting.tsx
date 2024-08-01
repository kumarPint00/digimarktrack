import React from "react";
import DrawerAppBar from "../../../landing-page/navbar/Navbar";
import FormComponent from "../webDevelopment/formComponent/FormComponent";
import Hero from "./hero/Hero";
import BestCompany from "./bestCompany/BestCompany";
import OverView from "./overView/OverView";
import Benefits from "./benefits/Benefits";
import WhyChooseUs from "./whyChooseUs/WhyChooseUs";
import GlobalFooterComponent from "@/components/GlobalFooterComponent";

const ItConsulting = () => {
  return (
    <>
      <DrawerAppBar />
      <Hero />
      <OverView />
      <BestCompany />
      <Benefits />
      <WhyChooseUs />
      <FormComponent />
      <GlobalFooterComponent />
    </>
  );
};

export default ItConsulting;
