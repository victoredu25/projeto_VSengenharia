import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Historia from "./components/Historia";
import Servicos from "./components/Servicos";
import NossoTime from "./components/NossoTime";
import ContatoSection from "./components/ContateNos";
import PopupLogin from "./components/PopupLogin";
import PaginaPerfil from "./components/PaginaPerfil";

function App() {
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [logado, setLogado] = useState(false);
  const [pagina, setPagina] = useState("home"); // "home" ou "perfil"

  const abrirPopup = () => setMostrarPopup(true);
  const fecharPopup = () => setMostrarPopup(false);

  const onPerfilClick = () => {
    if (logado) {
      setPagina("perfil");
      localStorage.setItem("pagina", "perfil");
    } else {
      abrirPopup();
    }
  };

  const handleVoltarParaHome = () => {
    setPagina("home");
    localStorage.setItem("pagina", "home");
  };

  // Verifica token/userId e página salva no localStorage ao iniciar o app
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const paginaSalva = localStorage.getItem("pagina");

    if (token && userId) {
      setLogado(true);
      if (paginaSalva) {
        setPagina(paginaSalva);
      }
    }
  }, []);

  // Controla overflow quando popup aberto
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
      <Navbar
        onPerfilClick={onPerfilClick}
        onHomeClick={handleVoltarParaHome} // Passa a função pro Navbar
      />

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
          <PaginaPerfil onVoltar={handleVoltarParaHome} />
        )}
      </main>

      {mostrarPopup && (
        <PopupLogin
          onClose={fecharPopup}
          onLoginSuccess={() => {
            setLogado(true);
            fecharPopup();
            setPagina("perfil");
            localStorage.setItem("pagina", "perfil");
          }}
        />
      )}
    </>
  );
}

export default App;
