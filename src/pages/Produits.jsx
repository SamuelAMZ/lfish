import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SmallHero from "../components/SmallHero";
import ProduitsComps from "../components/pageComp/ProduitsComps";
import Banner from "../components/Banner";

const Produits = () => {
  return (
    <>
      <Header />
      <SmallHero
        heading={"Produits"}
        image={"/img/nous.jpg"}
        desc={
          "Acteur clé dans la production des aliments pour les poissons d'élevage"
        }
      />
      <ProduitsComps />
      <Banner />
      <Footer />
    </>
  );
};

export default Produits;
