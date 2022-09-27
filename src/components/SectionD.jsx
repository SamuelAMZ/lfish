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
        <h4>Expertise</h4>
        <div className="line"></div>
        <h2>Conseil et assistance</h2>
        <h3>
          Dans le prolongement naturel de nos activités de provenderie et de
          pisciculture, notre activité de conseil vise à accompagner les
          entreprises dans la réussite de leurs activités piscicoles.
        </h3>
        <div>
          <NavLink to="/activite">
            <button>En savoir plus</button>
          </NavLink>
        </div>
      </motion.div>
      <div className="illustration">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src="./img/actuals/cage.jpg"
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
