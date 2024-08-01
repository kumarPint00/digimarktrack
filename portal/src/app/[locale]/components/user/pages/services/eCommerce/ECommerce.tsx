import React from "react";
import DrawerAppBar from "../../../landing-page/navbar/Navbar";
import FormComponent from "../webDevelopment/formComponent/FormComponent";
import Hero from "./hero/Hero";
import OverView from "./overView/OverView";
import Process from "./process/Process";
import DevCategories from "./devCategories/DevCategories";
import WhyEcommerce from "./whyEcommerce/WhyEcommerce";
import GlobalFooterComponent from "@/components/GlobalFooterComponent";

const ECommerce = () => {
  return (
    <>
      <DrawerAppBar />
      <Hero />
      <OverView />
      <Process />
      <DevCategories />
      <WhyEcommerce />
      <FormComponent />
      <GlobalFooterComponent />
    </>
  );
};

export default ECommerce;
