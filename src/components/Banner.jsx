import React from "react";
import { motion } from "framer-motion";
import { TbFish } from "react-icons/tb";
import { GiClownfish } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        Avez-vous une question ?
      </motion.h2>
      <motion.h3
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Les résultats de la survie et de la croissance dépendent directement de
        la qualité de l'alimentation
      </motion.h3>
      <div>
        <NavLink to="/contact">
          <motion.button
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Nous contacter
          </motion.button>
        </NavLink>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="fish-layers"
      >
        <div>
          <TbFish />
          <GiClownfish />
        </div>
        <div>
          <GiClownfish />
          <TbFish />
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
