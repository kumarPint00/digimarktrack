import React from "react";
import DrawerAppBar from "../../../landing-page/navbar/Navbar";
import Hero from "./hero/Hero";
import OverView from "./overView/OverView";
import KnowAboutUs from "./knowAboutUs/KnowAboutUs";
import FormComponent from "../webDevelopment/formComponent/FormComponent";
import DevCategories from "./devCategories/DevCategories";
import Business from "./business/Business";
import GlobalFooterComponent from "@/components/GlobalFooterComponent";

const MobileDevelopment = () => {
  return (
    <>
      <DrawerAppBar />
      <Hero />
      <OverView />
      <KnowAboutUs />
      <DevCategories />
      <Business />
      <FormComponent />
      <GlobalFooterComponent />
    </>
  );
};

export default MobileDevelopment;
