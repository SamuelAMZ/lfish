import React from "react";
import { motion } from "framer-motion";

const NousComps = () => {
  return (
    <div className="nous-content">
      <div className="sectionA">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="texts"
        >
          <h2>Mission</h2>
          <div className="line2"></div>
          <h3>
            C'est avec passion, et méticulosité que L'fish assure le
            développement d'un vaste assortiment d'aliments de qualité pour
            poissons . Nous vous proposons d'être votre expert en alimentation
            des poissons et développons nos services en fonction de vos bésoins.
          </h3>
        </motion.div>
        <div className="illustration">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            src="./img/actuals/nous2.jpg"
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

      {/* Vision */}
      <div className="sectionB">
        <div className="width-seter">
          <div className="illustration">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src="./img/actuals/nous3.jpg"
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
            <h2>Vision</h2>
            <div className="line2"></div>
            <h3>
              À l'échelle mondiale, l'aquaculture fait état d'une croissance
              considérable. L'fish veille à ce que les pisciculteurs togolais
              puissent assurer un élevage de poisson à la fois éfficace et
              responsable. Ensemble, nous contribuons de manière durable à la
              production alimentaire requise pour une population en pleine
              croissance.
            </h3>
          </motion.div>
        </div>

        <div
          className="layer1"
          style={{ backgroundImage: "url(/img/layers/circle1.png)" }}
        ></div>
      </div>
    </div>
  );
};

export default NousComps;
