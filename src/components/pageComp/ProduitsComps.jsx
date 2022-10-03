import React from "react";
import SingleProduct from "../SingleProduct";
import ProductMessage from "../ProductMessage";

const products = [
  {
    title: "Gamme <span>PM-Til</span> pour les poissons Tilapia",
    desc: "Cette gamme d’aliments peut s’utiliser dans les élevages intensifs que semi-intensifs. <br> Selon le stade vie de votre poisson, L’fish vous offre: ",
    points: [
      "Des aliments <b>NOURRISSANT</b>",
      "des aliments fournissant de <b>L'ÉNERGIE</b>",
      "Des aliments agréablement <b>DIGESTIBLE</b>",
    ],
    tags: [
      "Aliments pour alevins",
      "Aliments pour fingerling/juvéniles/adultes",
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
          points={item.points}
          tags={item.tags}
        />
      ))}

      <ProductMessage />
    </div>
  );
};

export default ProduitsComps;
