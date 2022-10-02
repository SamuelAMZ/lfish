import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SmallHero from "../components/SmallHero";

const Partenaires = () => {
  return (
    <>
      <Header />
      <SmallHero heading={"Partenaires"} image={"/img/actuals/head1.jpg"} />
      <div className="space"></div>
      <Footer />
    </>
  );
};

export default Partenaires;
