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
      <motion.div
        className="elements"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="first elm">
          <img src="./img/layers/grid.png" alt="grid" />
          <div>
            <p>Les espèces que nous nourrissons</p>
            <p>Le tilapia est le sujet de notre spécialisation en ce moment </p>
          </div>
          <div>
            <button>En savoir plus</button>
          </div>
        </div>
        <div className="second elm">
          <img src="./img/layers/cal.png" alt="cal" />
          <div>
            <p>Les espèces que nous nourrissons</p>
            <p>Lspécialisation en ce moment </p>
          </div>
          <div>
            <button>En savoir plus</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionC;
