import React from "react";
import { motion } from "framer-motion";

const SectionAt = () => {
  return (
    <div className="sectionB ">
      <div className="width-seter">
        <div className="illustration">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            src="./img/actuals/activite2.jpg"
            alt="cereal"
          />
          <motion.div
            initial={{ opacity: 0, x: "1rem" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="image"
          ></motion.div>
        </div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="texts sectionAt as"
        >
          <h2>Conseils et assistance des pisciculteurs</h2>
          <div className="line"></div>
          <h3>
            La proximité avec vous, nos clients apporte à ses aliments, que nous
            vous livrons, la capacité de garder leur qualité jusqu’à ce que vous
            nourrissiez vos poissons. <br></br>
            Nous allons au-delà de notre site de production pour votre bien :
            pour le plaisir des papilles de vos poissons et leur croissance
            optimale puis pour une meilleure rentabilité de votre activité.
          </h3>
        </motion.div>
      </div>
      <div
        className="layer3"
        style={{ backgroundImage: "url(/img/layers/circle1.png)" }}
      ></div>
    </div>
  );
};

export default SectionAt;
