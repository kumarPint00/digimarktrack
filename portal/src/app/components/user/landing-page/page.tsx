import React from "react";
import DrawerAppBar from "./navbar/Navbar";
import Hero from "./hero/Hero";
import AboutUs from "./aboutUs/AboutUs";
import Services from "./services/Services";
import WhyChooseUs from "./whyChooseUs/WhyChooseUs";

const LandingPage = () => {
  return (
    <>
      <DrawerAppBar />
      <Hero />
      <AboutUs />
      <Services />
      <WhyChooseUs />
    </>
  );
};

export default LandingPage;
