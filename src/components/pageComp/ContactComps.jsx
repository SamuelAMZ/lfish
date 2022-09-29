import React from "react";
import ContactForm from "../ContactForm";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactComps = () => {
  return (
    <div className="contact-container">
      <motion.div
        className="infomations"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="head">
          <h2>Nous contacter</h2>
          <div className="line2"></div>
          <h3>
            Vous pouvez nous contacter en utilisant nos informations de contact
            ou en remplissant le formulaire suivant.
          </h3>
        </div>
        <div className="actual-info">
          <div className="item">
            <a href="tel:+22891789074">
              <MdOutlinePhone />
              <p>+228 91 78 90 74</p>
            </a>
          </div>
          <div className="item">
            <a href="https://web.whatsapp.com/send?phone=+22891789074&text=Bonjour L'fish, je vous contacte depuis votre site web.">
              <BsWhatsapp />
              <p>+228 91 78 90 74</p>
            </a>
          </div>
          <div className="item">
            <a href="mailto:lfish-cheznous@lfishtogo.com">
              <MdOutlineEmail />
              <p>lfish-cheznous@lfishtogo.com</p>
            </a>
          </div>
          <div className="item">
            <a href="https://lfishtogo.com">
              <TbWorld />
              <p>lfishtogo.com</p>
            </a>
          </div>
          <div className="item">
            <a href="https://facebook.com">
              <FaFacebookF />
              <p>Facebook</p>
            </a>
          </div>
        </div>
      </motion.div>

      <ContactForm />
    </div>
  );
};

export default ContactComps;
