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
  const [logado, setLogado] = useState(false);
  const [pagina, setPagina] = useState("home"); // "home" ou "perfil"

  const abrirPopup = () => setMostrarPopup(true);
  const fecharPopup = () => setMostrarPopup(false);

  const onPerfilClick = () => {
    if (logado) {
      setPagina("perfil");
    } else {
      abrirPopup();
    }
  };

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
      <Navbar onPerfilClick={onPerfilClick} />

      <main className="w-screen min-h-screen overflow-hidden bg-[#DDD9CE]">
        {pagina === "home" && (
          <>
            <Banner />
            <Servicos />
            <Historia />
            <NossoTime />
            <ContatoSection />
          </>
        )}
        {pagina === "perfil" && (
          <div className="p-10">
            <h1 className="text-4xl font-bold text-center mt-20">
              Página do Perfil
            </h1>
            <button
              onClick={() => setPagina("home")}
              className="mt-10 block mx-auto text-blue-600 underline"
            >
              Voltar para Home
            </button>
          </div>
        )}
      </main>

      {mostrarPopup && (
        <PopupLogin
          onClose={fecharPopup}
          onLoginSuccess={() => {
            setLogado(true);
            fecharPopup();
            setPagina("perfil");
          }}
        />
      )}
    </>
  );
}

export default App;
