import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleContact = async (e) => {
    e.preventDefault();
    // validate values
    if (values.name && values.email && values.phone && values.message) {
      console.log("go");
      const url = "/.netlify/functions/contact";

      const sending = await fetch(url);
      console.log(sending);
      const dataBack = await sending.text();

      console.log(dataBack);
    } else {
      console.log("verifiez les champs");
    }
  };

  return (
    <div className="contact-form">
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        onSubmit={(e) => handleContact(e)}
      >
        <div className="item">
          <label htmlFor="nom">Nom</label>
          <div className="input-item">
            <AiOutlineUser />
            <input
              type="text"
              id="nom"
              required
              placeholder="Ex: Abla Doe"
              onChange={(e) =>
                setValues({
                  name: e.target.value,
                  email: values.email,
                  phone: values.phone,
                  message: values.message,
                })
              }
              value={values.name}
            />
          </div>
        </div>
        <div className="item">
          <label htmlFor="email">Email</label>
          <div className="input-item">
            <MdOutlineEmail />
            <input
              type="email"
              id="email"
              required
              placeholder="Ex: koffi@gmail.com"
              onChange={(e) =>
                setValues({
                  name: values.name,
                  email: e.target.value,
                  phone: values.phone,
                  message: values.message,
                })
              }
              value={values.email}
            />
          </div>
        </div>
        <div className="item">
          <label htmlFor="phone">Numéro</label>
          <div className="input-item">
            <MdOutlinePhone />
            <input
              type="number"
              id="phone"
              required
              placeholder="Ex: 90 00 00 00"
              onChange={(e) =>
                setValues({
                  name: values.name,
                  email: values.email,
                  phone: e.target.value,
                  message: values.message,
                })
              }
              value={values.phone}
            />
          </div>
        </div>
        <div className="item">
          <label htmlFor="message">Message</label>
          <div className="input-item">
            <textarea
              id="message"
              cols="30"
              rows="10"
              required
              placeholder="Ecrivez le message ici"
              onChange={(e) =>
                setValues({
                  name: values.name,
                  email: values.email,
                  phone: values.phone,
                  message: e.target.value,
                })
              }
              value={values.message}
            ></textarea>
          </div>
        </div>
        <button>Envoyer</button>
      </motion.form>

      <motion.div
        initial={{ opacity: 0, x: "-1rem" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="image"
      ></motion.div>
    </div>
  );
};

export default ContactForm;
