import HistoriaImg from "../assets/Historia.png";

export default function Historia() {
  return (
    <div className="bg-[#C4C3BC] w-full min-h-screen flex flex-col justify-center items-center mx-auto pb-[200px] pt-[150px]">
      <div className="gap-[100px] flex flex-col">
        <div>
          <h2 className="text-center text-[80px] font-bold">nossa história</h2>
        </div>

        <div className="flex justify-center items-start gap-[60px] mt-4">
          <div className="w-[400px] h-[1612px] gap-[632px] flex flex-col pt-[20px] pb-[380px] text-right">
            {/* Fase 1 */}
            <div className="w-[400px] h-[271px]">
              <div className="w-[390px] h-[70px]">
                <div className="w-[390px] h-[26px] font-bold text-[22px]" style={{ fontFamily: "'Times New Roman', serif" }}>
                  <h3>2000-2005</h3>
                </div>
                <div className="w-[390px] h-[42px] font-bold text-[28px]" style={{ fontFamily: "'Times New Roman', serif" }}>
                  <h3>Idealização e fundação</h3>
                </div>
              </div>
              <div className="w-[400px] h-[190px] text-justify font-regular text-[20px]" style={{ fontFamily: "'Times New Roman', serif" }}>
                <p>
                  Em meio a um cenário de crescente demanda por soluções técnicas inovadoras, três estudantes visionários uniram suas habilidades para criar algo único. Após meses de planejamento e busca por investidores, fundaram o escritório, estabelecendo as bases para um futuro promissor. O foco sempre esteve na qualidade dos serviços e no atendimento personalizado, elementos que conquistaram os primeiros clientes e reconhecimento local.
                </p>
              </div>
            </div>

            {/* Fase 3 (troquei com a 2) */}
            <div className="w-[400px] h-[279px]">
              <div className="w-[390px] h-[70px]">
                <div className="w-[390px] h-[26px] font-bold text-[22px]" style={{ fontFamily: "'Times New Roman', serif" }}>
                  <h3>2011-2018</h3>
                </div>
                <div className="w-[390px] h-[42px] font-bold text-[28px]" style={{ fontFamily: "'Times New Roman', serif" }}>
                  <h3>Filiais pelo Brasil</h3>
                </div>
              </div>
              <div className="w-[400px] h-[190px] text-justify font-regular text-[20px]" style={{ fontFamily: "'Times New Roman', serif" }}>
                <p>
                  A empresa consolidou seu crescimento com a abertura de filiais em diferentes estados do Brasil. Essa expansão estratégica permitiu ampliar o alcance dos serviços e fortalecer a marca em diversas regiões, mantendo a qualidade e o atendimento que sempre foram diferenciais, e adaptando-se às necessidades locais de cada mercado.
                </p>
              </div>
            </div>
          </div>

          <div className="w-[212px] h-[1568px]">
            <img
              src={HistoriaImg}
              alt="Historia da empresa"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-[400px] h-[1612px] gap-[618px] flex flex-col pt-[464px] text-left">
            {/* Fase 2 (troquei com a 3) */}
            <div className="w-[400px] h-[271px]">
              <div className="w-[390px] h-[70px]">
                <div className="w-[390px] h-[26px] font-bold text-[22px]" style={{ fontFamily: "'Times New Roman', serif" }}>
                  <h3>2006-2010</h3>
                </div>
                <div className="w-[390px] h-[42px] font-bold text-[28px]" style={{ fontFamily: "'Times New Roman', serif" }}>
                  <h3>Construção da sede</h3>
                </div>
              </div>
              <div className="w-[400px] h-[190px] text-justify font-regular text-[20px]" style={{ fontFamily: "'Times New Roman', serif" }}>
                <p>
                  Com o crescimento acelerado da empresa e a ampliação da carteira de clientes, foi essencial investir na construção da sede própria. Esse marco não só consolidou a presença física da empresa, mas também proporcionou um ambiente ideal para o desenvolvimento de projetos complexos, estimulando a inovação e a colaboração entre as equipes.
                </p>
              </div>
            </div>

            {/* Fase 4 */}
            <div className="w-[400px] h-[279px]">
              <div className="w-[390px] h-[70px]">
                <div className="w-[390px] h-[26px] font-bold text-[22px]" style={{ fontFamily: "'Times New Roman', serif" }}>
                  <h3>2019-2025</h3>
                </div>
                <div className="w-[390px] h-[42px] font-bold text-[28px]" style={{ fontFamily: "'Times New Roman', serif" }}>
                  <h3>Globalização da empresa</h3>
                </div>
              </div>
              <div className="w-[400px] h-[190px] text-justify font-regular text-[20px]" style={{ fontFamily: "'Times New Roman', serif" }}>
                <p>
                  Consolidando sua presença internacional, a empresa investiu em inovação tecnológica e estabeleceu parcerias globais. Essa fase marca o reconhecimento mundial, expansão dos mercados atendidos e o compromisso contínuo com a excelência, posicionando a marca entre as líderes do setor no cenário global.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
