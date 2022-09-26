import "./styles/style.min.css";
import { Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Nous from "./pages/Nous";
import Contact from "./pages/Contact";
import Activite from "./pages/Activite";
import Partenaires from "./pages/Partenaires";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Accueil />} />
        <Route path="/nous" element={<Nous />} />
        <Route exact path="/activite" element={<Activite />} />
        <Route path="/partenaires" element={<Partenaires />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
