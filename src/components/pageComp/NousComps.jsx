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
            Avec une grande finesse et une attention soutenue, L’fish produit
            une large gamme d’aliments pour les poissons d’élevage.
            <br />
            <br />
            Par le travail en continue de ces hommes et de ces femmes engagés en
            son sein, L’fish se met au service des pisciculteurs Togolais pour
            combler leurs attentes en matière de nutrition des poissons à
            différents stades de vie.
            <br />
            <br />
            Couronnée par la satisfaction client, les services offerts vont au-
            delà des besoins et attentes connues pour embrasser la culture de la
            proximité, le conseil-assistance avec les différents acteurs du
            monde de la pisciculture qui le souhaiteraient.
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
