import React from "react";
import { motion } from "framer-motion";

const SmallHero = ({ heading, image }) => {
  return (
    <div className="small-hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="shadow"></div>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {heading}
      </motion.h2>
    </div>
  );
};

export default SmallHero;
