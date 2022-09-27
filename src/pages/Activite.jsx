import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SmallHero from "../components/SmallHero";

const Activite = () => {
  return (
    <>
      <Header />
      <SmallHero heading={"Activités Clés"} image={"/img/nous.jpg"} />
      <div className="space"></div>
      <Footer />
    </>
  );
};

export default Activite;
