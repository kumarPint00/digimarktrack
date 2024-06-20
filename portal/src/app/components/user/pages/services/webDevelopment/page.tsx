import React from "react";
import DrawerAppBar from "../../../landing-page/navbar/Navbar";
import Hero from "./hero/Hero";
import OverView from "./overView/OverView";
import Benefits from "./benefits/Benefits";
import DevCategories from "./devCategories/DevCategories";
import FooterComponent from "../../../landing-page/footer/FooterComponent";

const page = () => {
  return (
    <>
      <DrawerAppBar />
      <Hero />
      <OverView />
      <Benefits />
      <DevCategories />
      <FooterComponent />
    </>
  );
};

export default page;
