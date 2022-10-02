import React from "react";
import { motion } from "framer-motion";

const SingleProduct = ({ title, desc, tags }) => {
  const handleCommands = (e) => {
    // generate commande number
    let cmdNum = Math.floor(Math.random() * 90000);
    // send cmd
    const proName = e.target.parentElement.parentElement.children[0].innerText;
    window.location.replace(
      `https://api.WhatsApp.com/send?phone=+22891789074&text=Numero De Commande: ${cmdNum} -- Produit: ${proName} `
    );
  };

  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="single-product sectionAf"
      >
        <h2>{title} </h2>
        <h3 dangerouslySetInnerHTML={{ __html: desc }}></h3>
        <div className="tags">
          <ul>
            {tags.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="product-button">
          <button onClick={(e) => handleCommands(e)}>
            Commander Via Whatsapp
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default SingleProduct;
