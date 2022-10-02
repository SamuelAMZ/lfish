import React from "react";
import { NavLink } from "react-router-dom";

const ProductMessage = () => {
  return (
    <div className="product-message">
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
    </div>
  );
};

export default ProductMessage;
