import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const SectionA = () => {
  return (
    <div className="sectionA">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="texts"
      >
        <h4>Expertise</h4>
        <div className="line"></div>
        <h2>
          Acteur clé dans la production des aliments pour les poissons d’élevage
        </h2>
        <h3>
          Produire sur place au Togo et fournir aux pisciculteurs togolais de
          manière qualitative et quantitative les aliments flottants nécessaires
          aux différentes étapes de la vie des poissons.
        </h3>
        <div>
          <NavLink to="/contact">
            <button>Nous contacter</button>
          </NavLink>
        </div>
      </motion.div>
      <div className="illustration">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src="./img/actuals/tilapia.jpg"
          alt="tilapia"
        />
        <motion.div
          initial={{ opacity: 0, x: "-1rem" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="image"
        ></motion.div>
      </div>
    </div>
  );
};

export default SectionA;
