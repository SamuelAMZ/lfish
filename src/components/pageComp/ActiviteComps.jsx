import React from "react";
import SectionAf from "../SectionAf";
import SectionAs from "../SectionAs";
import SectionAt from "../SectionAt";
import Banner from "../Banner";

const textA = {
  heading: "L'fish, Une usine de production, à la satisfaction du pisciculteur",
  body: "L’fish, à travers des équipements bien choisis et des intrants délicatement sélectionnés, produit à travers des procédés et mode opératoire bien étudiés, des aliments de qualité pour satisfaire aux besoins nutritifs des poissons d’élevage à leurs différents stades de vie: alevins, fingerlings, juvéniles, adultes, stock de géniteurs. <br><br> La gamme d'aliments pour le poisson Tilapia occupe une grande part dans la production de L'fish puisqu'il représente la 6ème espèce produite  au Monde selon le classement FAO 2020. Bien qu'en Afrique subsaharienne et au Togo, le Tilapia est le poisson le plus élevé, L'fish fournit selon vos besoins les aliments pour le poisson chat africain/silure et les carpes. <br><br> Les gammes d'aliments que nous offrons peuvent être bien aussi utilisées en étangs, en cages qu'en bacs en béton ou en plastique, fibre de verre système ouvert, semi-fermé ou totalement fermé recirculé",
};

const textB = {
  heading: "Recherche et developpement chez L'fish",
  body: "Notre pays, essentiellement agricole offre une variété de produits et de sous-produits regorgeant de valeurs nutritives utiles pour l’alimentation de différents types de poisson d’élevage tels que le tilapia, le poisson-chat africain et la carpe... <br><br>La recherche et le développement sur les matières premières et les mécanismes de durabilité sont au cœur de la production d’aliments de qualité chez L’fish, pour le bonheur des consommateurs que vous êtes ! <br><br>Ensemble pour créer un monde meilleur où la faim (ODD 2), la malnutrition, la surpêche n’ont plus leur place, nous devrons œuvrer dans l’innovation pour rendre nos entreprises responsables et durables. <br><br> <b>CONTACTEZ-NOUS SI VOUS VOULEZ FAIRE PARTIE DE CETTE MERVEILLEUSE AVENTURE. </b>",
};

const ActiviteComps = () => {
  return (
    <div className="activite">
      <SectionAf text={textA} />
      <SectionAs />
      <SectionAf text={textB} />
      <SectionAt />
      <Banner />
    </div>
  );
};

export default ActiviteComps;
