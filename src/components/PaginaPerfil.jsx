export default function PaginaPerfil({ onVoltar }) {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-center mt-20">
        Página do Perfil
      </h1>
      <button
        onClick={onVoltar}
        className="mt-10 block mx-auto text-blue-600 underline"
      >
        Voltar para Home
      </button>
    </div>
  );
}
