export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#B8A224] text-white py-2 shadow-lg">
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        {/* Logo */}
        <span className="text-2xl font-bold tracking-tight">
          VS Engineering
        </span>
        
        {/* Links de Navegação */}
        <div className="flex space-x-8">
          <a 
            href="#" 
            className="text-lg font-medium hover:text-blue-400 transition-colors duration-300"
          >
            Home
          </a>
          <a 
            href="#" 
            className="text-lg font-medium hover:text-blue-400 transition-colors duration-300"
          >
            Projetos
          </a>
          <a 
            href="#" 
            className="text-lg font-medium hover:text-blue-400 transition-colors duration-300"
          >
            Perfil
          </a>
          <a 
            href="#" 
            className="text-lg font-medium hover:text-blue-400 transition-colors duration-300"
          >
            Suporte
          </a>
        </div>
      </div>
    </nav>
  );
}