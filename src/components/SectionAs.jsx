import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const SectionAs = () => {
  return (
    <div className="sectionB">
      <div className="width-seter">
        <div className="illustration ">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            src="./img/actuals/activite.jpg"
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
          className="texts as"
        >
          <h2>Contrôle qualité des aliments produits</h2>
          <div className="line"></div>
          <h3>
            Le contrôle qualité des aliments produits est primordial et se fait
            chez nous et chez des laboratoires de référence au Togo. Il commence
            dès le choix des matières premières, leur réception, et stockage,
            leur transformation jusqu’aux produits finis analysés et livrés.
          </h3>
          <div>
            <NavLink to="/contact">
              <button>Nous Contacter</button>
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

export default SectionAs;
