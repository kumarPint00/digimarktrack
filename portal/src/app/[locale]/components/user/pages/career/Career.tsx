import React from "react";
import DrawerAppBar from "../../landing-page/navbar/Navbar";
import FormComponent from "../services/webDevelopment/formComponent/FormComponent";
import GlobalFooterComponent from "@/components/GlobalFooterComponent";
import Hero from "./hero/Hero";

const Career = () => {
  return (
    <>
      <DrawerAppBar />
      <Hero />
      <FormComponent />
      <GlobalFooterComponent />
    </>
  );
};

export default Career;
