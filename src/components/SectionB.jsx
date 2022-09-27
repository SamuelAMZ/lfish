import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const SectionB = () => {
  return (
    <div className="sectionB">
      <div className="width-seter">
        <div className="illustration">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            src="./img/actuals/cereal2.jpg"
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
            La recherche et le développement sur les meilleures matières
            premières et les mécanismes de durabilité sont au cœur de la
            production d'aliments de qualité pour le bonheur des consommateurs
            que vous êtes. Ensemble pour créer, nous opérons pour une entreprise
            responsable et durable.
          </h3>
          <div>
            <NavLink to="/activite">
              <button>En savoir plus</button>
            </NavLink>
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
