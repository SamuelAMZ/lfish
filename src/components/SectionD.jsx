import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const SectionD = () => {
  return (
    <div className="sectionA">
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
          La recherche et le développement sur les meilleures matières premières
          et les mécanismes de durabilité sont au cœur de la production
          d'aliments de qualité pour le bonheur des consommateurs que vous êtes.
          L'fish mets l'amélioration continue au centre d'une production
          responsable et durable. Travaillons donc ensemble pour booster la
          sécurité alimentaire et garantir un bel avenir pour les générations
          futures.
        </h3>
        <div>
          <NavLink to="/contact">
            <button>Contactez-nous</button>
          </NavLink>
        </div>
      </motion.div>
      <div className="illustration">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src="./img/actuals/cereal2.jpg"
          alt="cage poisson"
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

export default SectionD;
