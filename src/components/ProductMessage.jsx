import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const ProductMessage = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="product-message"
    >
      <h4>Ce que nous offrons</h4>
      <div className="line"></div>
      <h2>
        Contactez directement L’fish pour d’autres gammes d’aliments pour des
        espèces de poissons autre que le tilapia
      </h2>
      <h3>
        Gamme 'PM-Sil' pour les Silures <br />
        Gamme 'PM-Carp' pour les Carpes
      </h3>

      <div>
        <NavLink to="/contact">
          <button>Nous contacter</button>
        </NavLink>
      </div>
    </motion.div>
  );
};

export default ProductMessage;
