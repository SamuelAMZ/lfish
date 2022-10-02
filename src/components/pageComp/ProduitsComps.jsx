import React from "react";
import SingleProduct from "../SingleProduct";
import ProductMessage from "../ProductMessage";

const products = [
  {
    title: "Gamme 'PM-Til' pour les poissons Tilapia",
    desc: "Cette gamme d’aliments peut s’utiliser dans les élevages intensifs qu’extensitfs. <br> Selon le stade vie de votre poisson, L’fish vous offre des aliments Nourrissant, Energisants et Digestibles (NED)",
    tags: [
      "Aliments pour alevins",
      "Aliments pour fingerling/juvéniles",
      "Aliments pour adultes",
      "Spécial aliment Géniteurs",
    ],
  },
];

const ProduitsComps = () => {
  return (
    <div className="produits">
      {products.map((item, idx) => (
        <SingleProduct
          key={idx}
          title={item.title}
          desc={item.desc}
          tags={item.tags}
        />
      ))}

      <ProductMessage />
    </div>
  );
};

export default ProduitsComps;
