export default function Navbar({ onPerfilClick }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#B8A224] text-white py-2 shadow-lg">
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <span className="text-2xl font-bold tracking-tight">
          VS Engineering
        </span>

        <div className="flex space-x-8">
          <a
            href="#"
            className="text-lg font-medium hover:text-blue-400 transition-colors duration-300"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Home
          </a>
          <a
            href="#"
            className="text-lg font-medium hover:text-blue-400 transition-colors duration-300"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Projetos
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onPerfilClick(); // abre o popup
            }}
            className="text-lg font-medium hover:text-blue-400 transition-colors duration-300"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Perfil
          </a>
          <a
            href="#"
            className="text-lg font-medium hover:text-blue-400 transition-colors duration-300"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Suporte
          </a>
        </div>
      </div>
    </nav>
  );
}
