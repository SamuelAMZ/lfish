import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SectionA from "../components/SectionA";
import SectionB from "../components/SectionB";
import SectionC from "../components/SectionC";
import SectionD from "../components/SectionD";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const Accueil = () => {
  return (
    <>
      <Header />
      <Hero />
      <SectionA />
      <SectionB />
      {/* <SectionC /> */}
      <SectionD />
      <Banner />
      <Footer />
    </>
  );
};

export default Accueil;
