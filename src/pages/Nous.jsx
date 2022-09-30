import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SmallHero from "../components/SmallHero";
import NousComps from "../components/pageComp/NousComps";
import Banner from "../components/Banner";

const Nous = () => {
  return (
    <>
      <Header />
      <SmallHero
        heading={"Qui sommes nous?"}
        image={"/img/nous.jpg"}
        desc={
          "Acteur clé dans la production des aliments pour les poissons d'élevage"
        }
      />
      <NousComps />
      <Banner />
      <Footer />
    </>
  );
};

export default Nous;
