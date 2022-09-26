import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: "url(/img/hero3.jpg)" }}>
      <motion.div
        className="hero1"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <h3>Bienvenu chez L'Fish</h3>
      </motion.div>
      <motion.div
        className="hero2"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Une large gamme d'aliments pour poissons d'élevage</h1>
      </motion.div>
      <motion.div
        className="hero3"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>
          la référence pour la valeur nutritionnelle dont vos poissons ont
          besoin
        </h2>
      </motion.div>
      <motion.button
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        En savoir plus
      </motion.button>
    </div>
  );
};

export default Hero;
