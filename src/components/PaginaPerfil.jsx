import { useEffect, useState } from "react";

export default function PaginaPerfil({ onVoltar }) {
  const [userData, setUserData] = useState(null);
  const [editandoCampo, setEditandoCampo] = useState(null);
  const [novoValor, setNovoValor] = useState("");
  const [senhaAtual, setSenhaAtual] = useState("");

  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch(
          `https://backendvsengenharia.onrender.com/users/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await res.json();
        if (res.ok) {
          setUserData(data);
        } else {
          alert(data.error || "Erro ao carregar dados do usuário.");
        }
      } catch (err) {
        console.error("Erro ao buscar usuário:", err);
      }
    }

    fetchUser();
  }, [userId, token]);

  const iniciarEdicao = (campo) => {
    setEditandoCampo(campo);
    setNovoValor(userData[campo] || "");
    setSenhaAtual("");
  };

  const cancelarEdicao = () => {
    setEditandoCampo(null);
    setNovoValor("");
    setSenhaAtual("");
  };

  const salvarAlteracao = async () => {
    if (!senhaAtual) {
      alert("Por favor, insira sua senha atual para confirmar a alteração.");
      return;
    }

    const body = { senhaAtual };
    body[editandoCampo] = novoValor;

    try {
      const res = await fetch(
        `https://backendvsengenharia.onrender.com/users/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(body),
        }
      );

      const data = await res.json();
      if (res.ok) {
        alert("Alteração feita com sucesso!");
        setUserData(data.user);
        cancelarEdicao();
      } else {
        alert(data.error || "Erro ao atualizar informação.");
      }
    } catch (err) {
      console.error("Erro ao salvar alteração:", err);
      alert("Erro ao salvar alteração.");
    }
  };

  if (!userData) {
    return (
      <div className="p-10 text-center text-xl">Carregando dados do perfil...</div>
    );
  }

  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-center mt-10 mb-10">
        Página do Perfil
      </h1>

      {[
        { label: "Nome", campo: "name" },
        { label: "Email", campo: "email" },
        { label: "Senha", campo: "password" },
      ].map(({ label, campo }) => (
        <div
          key={campo}
          className="mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4"
        >
          <label className="text-lg font-semibold w-24">{label}:</label>
          {editandoCampo === campo ? (
            <div className="flex flex-col gap-2 w-full">
              <input
                type={campo === "password" ? "password" : "text"}
                value={novoValor}
                onChange={(e) => setNovoValor(e.target.value)}
                placeholder={`Novo ${label.toLowerCase()}`}
                className="border border-gray-300 rounded px-3 py-1"
              />
              <input
                type="password"
                value={senhaAtual}
                onChange={(e) => setSenhaAtual(e.target.value)}
                placeholder="Digite sua senha atual"
                className="border border-gray-300 rounded px-3 py-1"
              />
              <div className="flex gap-2">
                <button
                  onClick={salvarAlteracao}
                  className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                >
                  Salvar
                </button>
                <button
                  onClick={cancelarEdicao}
                  className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
                >
                  Cancelar
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-4 w-full">
              <span className="text-gray-800">
                {campo === "password" ? "••••••••" : userData[campo]}
              </span>
              <button
                onClick={() => iniciarEdicao(campo)}
                className="text-blue-600 hover:underline"
              >
                Trocar
              </button>
            </div>
          )}
        </div>
      ))}

      <button
        onClick={onVoltar}
        className="mt-10 block mx-auto text-blue-600 underline"
      >
        Voltar para Home
      </button>
    </div>
  );
}
