import React from "react";
import DrawerAppBar from "../../landing-page/navbar/Navbar";
import FormComponent from "../services/webDevelopment/formComponent/FormComponent";
import GlobalFooterComponent from "@/components/GlobalFooterComponent";
import Hero from "./hero/Hero";
import OverView from "./overView/OverView";
import CareerAt360 from "./careerAt360/CareerAt360";
import BestCompany from "./bestCompany/BestCompany";
import JobsInDubai from "./jobsInDubai/JobsInDubai";
import Internship from "./internship/Internship";

const Career = () => {
  return (
    <>
      <DrawerAppBar />
      <Hero />
      <OverView />
      <CareerAt360 />
      <BestCompany />
      <JobsInDubai />
      <Internship />
      <FormComponent />
      <GlobalFooterComponent />
    </>
  );
};

export default Career;
