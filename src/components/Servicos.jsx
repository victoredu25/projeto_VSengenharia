import ObrasImg from "../assets/Obras.png";
import ProjetosImg from "../assets/Projetos.png";
import ConsultoriasImg from "../assets/Consultorias.png";

export default function Servicos() {
  const servicos = [
    {
      imagem: ProjetosImg,
      titulo: "Projetos Estruturais",
      descricao:
        "Desenvolvimento de projetos estruturais com foco em eficiência energética e sustentabilidade, integrando tecnologia de ponta para otimização de recursos e segurança estrutural.",
    },
    {
      imagem: ObrasImg,
      titulo: "Execução de Obras",
      descricao:
        "Gerenciamento e execução de obras civis com rigoroso controle de qualidade, prazos e segurança, utilizando metodologias modernas de construção e acompanhamento técnico especializado.",
    },
    {
      imagem: ConsultoriasImg,
      titulo: "Consultorias",
      descricao:
        "Consultorias técnicas em engenharia civil, ambiental e de segurança, fornecendo análises detalhadas e soluções inovadoras para desafios complexos no setor da construção.",
    },
  ];

  return (
    <div
      className="py-16 px-4 bg-[#DDD9CE]"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Título da seção */}
        <h2
          className="text-[80px] font-bold text-center mb-4"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Nossos serviços
        </h2>
        <p
          className="text-center text-gray-600 mb-12 text-[22px]"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >
          Veja nossas principais áreas de atuação no mercado
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicos.map((servico, index) => (
            <div
              key={index}
              className="bg-[#E7E4DA] p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-[#D2CFBE] cursor-pointer"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              <img
                src={servico.imagem}
                alt={servico.titulo}
                className="w-full max-w-[150px] h-auto mx-auto mb-4"
              />
              <h3
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {servico.titulo}
              </h3>
              <p style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                {servico.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
