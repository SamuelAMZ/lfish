import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="notfound">
        <div>
          <h1>404</h1>
          <p>Page non trouvée, retournez à la page d'accueil ?</p>
        </div>
        <Link className="backto" to="/">
          Accueil
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
