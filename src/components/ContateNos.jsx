import backgroundContato from "../assets/BackgroundContato.png";

export default function ContatoSection() {
  return (
    <div
      className="w-full h-auto bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundContato})` }}
    >
      <div className="w-full max-w-5xl rounded-xl p-8 grid md:grid-cols-2 gap-6 text-white bg-opacity-0">
        <h2
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          className="text-4xl font-bold md:col-span-2 text-center mb-4"
        >
          Contate-nos
        </h2>

        <textarea
          style={{ backgroundColor: "#DDD9CE", fontFamily: '"Times New Roman", serif' }}
          className="rounded-xl p-4 w-full h-48 resize-none text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="Sua mensagem aqui*"
        ></textarea>

        <div className="flex flex-col gap-4">
          <input
            style={{ backgroundColor: "#DDD9CE", fontFamily: '"Times New Roman", serif' }}
            className="rounded-xl p-4 w-full text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Seu nome*"
            type="text"
          />
          <input
            style={{ backgroundColor: "#DDD9CE", fontFamily: '"Times New Roman", serif' }}
            className="rounded-xl p-4 w-full text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Seu e-mail*"
            type="email"
          />
          <input
            style={{ backgroundColor: "#DDD9CE", fontFamily: '"Times New Roman", serif' }}
            className="rounded-xl p-4 w-full text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Seu telefone*"
            type="tel"
          />
        </div>

        <div className="md:col-span-2 flex justify-center mt-4">
          <button
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            className="bg-yellow-500 text-white text-2xl font-bold px-8 py-3 rounded-full hover:bg-yellow-600 transition-all shadow-lg"
          >
            enviar
          </button>
        </div>
      </div>
    </div>
  );
}
