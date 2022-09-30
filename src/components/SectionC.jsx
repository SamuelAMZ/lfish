import React from "react";
import { motion } from "framer-motion";

const SectionC = () => {
  return (
    <div className="sectionC">
      <motion.div
        className="head"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <h4>Nos services</h4>
        <div className="line"></div>

        <h2>Des solutions pour votre activité</h2>
        <h3>
          Les résultats de la survie et de la croissance dépendent directement
          de la qualité de l'alimentation
        </h3>
      </motion.div>
    </div>
  );
};

export default SectionC;
