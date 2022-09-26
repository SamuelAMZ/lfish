import React from "react";
import { motion } from "framer-motion";

const SectionB = () => {
  return (
    <div className="sectionB">
      <div className="width-seter">
        <div className="illustration">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            src="./img/actuals/cereal.jpg"
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
          className="texts"
        >
          <h4>Innovation</h4>
          <div className="line"></div>
          <h2>Recherche et développement</h2>
          <h3>
            Chez L'Fish, nous sommes passionnés par l'innovation. Notre objectif
            ultime est de voir la recherche que nous menons mise en œuvre dans
            des solutions innovantes et durables pour l'industrie de
            l'aquaculture.
          </h3>
          <div>
            <button>Nous contacter</button>
          </div>
        </motion.div>
      </div>

      <div
        className="layer1"
        style={{ backgroundImage: "url(/img/layers/circle1.png)" }}
      ></div>
    </div>
  );
};

export default SectionB;
