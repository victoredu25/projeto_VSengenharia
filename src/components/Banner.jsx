import Banner_bemvindo from "../assets/Banner_bemvindo.png";

export default function Banner() {
  return (
    <div className="relative w-full overflow-hidden">
      <img
        src={Banner_bemvindo}
        alt="banner de boas-vindas"
        className="w-full h-auto block m-0 p-0 align-baseline"
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
        <h1 className="text-[38px] font-bold font-times mb-2 text-[#DDD9CE]">
          Bem-vindo à <i>VS engineering</i>
        </h1>
        <p className="text-[96px] mb-4 text-[#DDD9CE] font-bold font-times">
          Que bom te ter aqui
        </p>
        <button className=" cursor-pointer bg-[#B8A224] text-[#DDD9CE] font-bold py-2 px-6 rounded-md text-[30px] transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
          Conte-me mais
        </button>
      </div>
    </div>
  );
}
