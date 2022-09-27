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
        <h4>Ce que nous offrons</h4>
        <div className="line"></div>
        <h2>
          Principal acteur dans la production d'aliments pour poissons d'élevage
        </h2>
        <h3>
          Produire sur place et fournir aux pisciculteurs de manière qualitative
          les aliments flottants nécessaires aux différentes étapes de la vie
          des poissons élevés à tout moment.
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
