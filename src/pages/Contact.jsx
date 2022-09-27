import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SmallHero from "../components/SmallHero";

const Contact = () => {
  return (
    <>
      <Header />
      <SmallHero heading={"Contact"} image={"/img/nous.jpg"} />
      <div className="space"></div>
      <Footer />
    </>
  );
};

export default Contact;
