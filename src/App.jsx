import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Historia from "./components/Historia";
import Servicos from "./components/Servicos";
import NossoTime from "./components/NossoTime";
import ContatoSection from "./components/ContateNos";
import PopupLogin from "./components/PopupLogin";

function App() {
  const [mostrarPopup, setMostrarPopup] = useState(false);

  const abrirPopup = () => setMostrarPopup(true);
  const fecharPopup = () => setMostrarPopup(false);

  // Travar o scroll da página quando o popup estiver aberto
  useEffect(() => {
    if (mostrarPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mostrarPopup]);

  return (
    <>
      <Navbar onPerfilClick={abrirPopup} />

      <main className="w-screen min-h-screen overflow-hidden bg-[#DDD9CE]">
        <Banner />
        <Servicos />
        <Historia />
        <NossoTime />
        <ContatoSection />
      </main>

      {mostrarPopup && (
        <PopupLogin onClose={fecharPopup} />
      )}
    </>
  );
}

export default App;
