import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Historia from "./components/Historia";
import Servicos from "./components/Servicos";
import NossoTime from "./components/NossoTime";
import ContatoSection from "./components/ContateNos";

function App() {
  return (
    <>
      <Navbar />
      <main className="w-screen min-h-screen overflow-hidden bg-[#DDD9CE]">
        <Banner></Banner>
        <Servicos></Servicos>
        <Historia></Historia>
        <NossoTime></NossoTime>
        <ContatoSection></ContatoSection>
      </main>
    </>
  );
}

export default App;
