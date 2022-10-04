import React from "react";
import SectionAf from "../SectionAf";

const textA = {
  heading: "Nos Partenaires",
  body: "La majorité de nos partenaires sont au Togo: institutions et laboratoires, centres de formation dédiées à l'aquaculture, l'agriculture et la pêche. <br><br> Nos partenaires, ne sont pas d'autres personnes que vous: les fermes piscicoles, les représentants de la marque PM sont nos premiers partenaires. <br><br> Nous avons également des partenaires privés qui nous accompagnent dans la technique, la recherche et le développement, la communication. Le réseau est au coeur de la croissance économique et de l'inclusion financière.<br> <br> Plus de partenaires chez L'fish, mieux c'est!",
};

const PartenaireComps = () => {
  return (
    <>
      <SectionAf text={textA} />
    </>
  );
};

export default PartenaireComps;
