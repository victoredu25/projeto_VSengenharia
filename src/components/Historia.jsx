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
            <div className="w-[400px] h-[271px]">
              <div className="w-[390px] h-[70px]">
                <div className="w-[390px] h-[26px] font-bold text-[22px]">
                  <h3>2000-2005</h3>
                </div>
                <div className="w-[390px] h-[42px] font-bold text-[28px]">
                  <h3>Idealização e fundação</h3>
                </div>
              </div>
              <div className="w-[400px] h-[190px] text-justify font-regular text-[20px]">
                <p>
                  A empresa surgiu da vontade de aplicar engenharia com inovação. Três estudantes identificaram demandas locais por soluções técnicas. Uniram habilidades complementares e buscaram investidores. Após meses de planejamento, fundaram o escritório, adquiriram ferramentas básicas e iniciaram atendimentos. Focaram em qualidade e atendimento personalizado. O reconhecimento veio com o primeiro
                </p>
              </div>
            </div>

            <div className="w-[400px] h-[279px]">
              <div className="w-[390px] h-[70px]">
                <div className="w-[390px] h-[26px] font-bold text-[22px]">
                  <h3>2000-2005</h3>
                </div>
                <div className="w-[390px] h-[42px] font-bold text-[28px]">
                  <h3>Idealização e fundação</h3>
                </div>
              </div>
              <div className="w-[400px] h-[190px] text-justify font-regular text-[20px]">
                <p>
                  A empresa surgiu da vontade de aplicar engenharia com inovação. Três estudantes identificaram demandas locais por soluções técnicas. Uniram habilidades complementares e buscaram investidores. Após meses de planejamento, fundaram o escritório, adquiriram ferramentas básicas e iniciaram atendimentos. Focaram em qualidade e atendimento personalizado. O reconhecimento veio com o primeiro
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
            <div className="w-[400px] h-[271px]">
              <div className="w-[390px] h-[70px]">
                <div className="w-[390px] h-[26px] font-bold text-[22px]">
                  <h3>2000-2005</h3>
                </div>
                <div className="w-[390px] h-[42px] font-bold text-[28px]">
                  <h3>Idealização e fundação</h3>
                </div>
              </div>
              <div className="w-[400px] h-[190px] text-justify font-regular text-[20px]">
                <p>
                  A empresa surgiu da vontade de aplicar engenharia com inovação. Três estudantes identificaram demandas locais por soluções técnicas. Uniram habilidades complementares e buscaram investidores. Após meses de planejamento, fundaram o escritório, adquiriram ferramentas básicas e iniciaram atendimentos. Focaram em qualidade e atendimento personalizado. O reconhecimento veio com o primeiro
                </p>
              </div>
            </div>

            <div className="w-[400px] h-[279px]">
              <div className="w-[390px] h-[70px]">
                <div className="w-[390px] h-[26px] font-bold text-[22px]">
                  <h3>2000-2005</h3>
                </div>
                <div className="w-[390px] h-[42px] font-bold text-[28px]">
                  <h3>Idealização e fundação</h3>
                </div>
              </div>
              <div className="w-[400px] h-[190px] text-justify font-regular text-[20px]">
                <p>
                  A empresa surgiu da vontade de aplicar engenharia com inovação. Três estudantes identificaram demandas locais por soluções técnicas. Uniram habilidades complementares e buscaram investidores. Após meses de planejamento, fundaram o escritório, adquiriram ferramentas básicas e iniciaram atendimentos. Focaram em qualidade e atendimento personalizado. O reconhecimento veio com o primeiro
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
