import React from "react";
import DrawerAppBar from "../../../landing-page/navbar/Navbar";
import FormComponent from "../webDevelopment/formComponent/FormComponent";
import FooterComponent from "../../../landing-page/footer/FooterComponent";
import Hero from "./hero/Hero";
import OverView from "./overView/OverView";
import BestCompany from "./bestCompany/BestCompany";
import WhyChooseUs from "./whyChooseUs/WhyChooseUs";
import GlobalFooterComponent from "@/components/GlobalFooterComponent";

const SoftwareDevelopment = () => {
  return (
    <>
      <DrawerAppBar />
      <Hero />
      <OverView />
      <BestCompany />
      <WhyChooseUs />
      <FormComponent />
      <GlobalFooterComponent />
    </>
  );
};

export default SoftwareDevelopment;
