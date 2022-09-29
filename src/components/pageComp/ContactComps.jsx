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
            Lorem ipsum dolor sit amet conse adipisicing elit. Numquam, hic.
          </h3>
        </div>
        <div className="actual-info">
          <div className="item">
            <a href="#">
              <MdOutlinePhone />
              <p>12345789</p>
            </a>
          </div>
          <div className="item">
            <a href="#">
              <BsWhatsapp />
              <p>12345789</p>
            </a>
          </div>
          <div className="item">
            <a href="#">
              <MdOutlineEmail />
              <p>test@lfishtogo.com</p>
            </a>
          </div>
          <div className="item">
            <a href="#">
              <TbWorld />
              <p>lfishtogo.com</p>
            </a>
          </div>
          <div className="item">
            <a href="#">
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
