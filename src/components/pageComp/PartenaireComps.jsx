import React from "react";
import SectionAf from "../SectionAf";

const textA = {
  heading: "Nos Partenaires",
  body: "La majorité de nos partenaires sont au Togo : institutions et laboratoires, centres de formation dédiées à l'aquaculture, l'agriculture et la pêche. <br><br> Nos partenaires, ne sont d'autres personnes que vous: les fermes piscicoles, les représentants de la marque PM. <br><br> Nous avons également des partenaires privés qui nous accompagnent au niveau technique, de la recherche et le développement et la communication. Le réseau est au coeur de la croissance économique, <b> plus de partenaires chez L'fish, mieux c'est! </b>",
};

const PartenaireComps = () => {
  return (
    <>
      <SectionAf text={textA} />
    </>
  );
};

export default PartenaireComps;
