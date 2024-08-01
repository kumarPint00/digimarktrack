import React from "react";
import DrawerAppBar from "../../../landing-page/navbar/Navbar";
import FormComponent from "../webDevelopment/formComponent/FormComponent";
import Hero from "./hero/Hero";
import OverView from "./overView/OverView";
import Why360Solution from "./why360Solution/Why360Solution";
import Process from "./process/Process";
import GlobalFooterComponent from "@/components/GlobalFooterComponent";

const ReputationManagement = () => {
  return (
    <>
      <DrawerAppBar />
      <Hero />
      <OverView />
      <Why360Solution />
      <Process />
      <FormComponent />
      <GlobalFooterComponent />
    </>
  );
};

export default ReputationManagement;
