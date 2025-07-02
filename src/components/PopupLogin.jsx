import { useState } from "react";
import FotoLogin from "../assets/FotoLogin.png";

export default function PopupLogin({ onClose }) {
  const [tela, setTela] = useState("login");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const irParaRegistro = () => setTela("register");
  const irParaLogin = () => setTela("login");

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      const response = await fetch("https://backendvsengenharia.onrender.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Conta criada com sucesso!");
        irParaLogin();
      } else {
        alert(data.message || "Erro ao registrar.");
      }
    } catch (error) {
      console.error("Erro ao registrar:", error);
      alert("Erro ao registrar.");
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="w-[1000px] h-[711px] rounded-[35px] overflow-hidden bg-[#ddd9CE]"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`w-[200%] h-full flex transition-transform duration-500 ease-in-out ${
            tela === "register" ? "-translate-x-1/2" : "translate-x-0"
          }`}
        >
          {/* Tela Login */}
          <div className="w-1/2 h-full flex">
            <div className="w-[550px] h-[710px]">
              <img src={FotoLogin} alt="contrucao" />
            </div>

            <div className="bg-[#b8a224] w-[450px] h-[710px] flex flex-col items-center gap-[120px] px-[42px] py-[50px]">
              <h1 className="text-[60px] font-bold mb-2 text-[#12182b]">Bem vindo</h1>

              <div className="flex flex-col items-center gap-[30px]">
                <div className="flex flex-col items-center w-[320px] h-[170px]">
                  <div className="w-[320px] h-[148px] flex flex-col items-center gap-[20px]">
                    <div className="w-[320px] h-[64px]">
                      <div className="w-[320px] h-[24px] text-left flex items-center">
                        <p className="text-[20px] text-[#12182b]">e-mail*</p>
                      </div>
                      <input className="w-[320px] h-[40px] rounded-[12px] bg-amber-50" />
                    </div>

                    <div className="w-[320px] h-[64px] flex flex-col items-center">
                      <div className="w-[320px] h-[24px] text-left flex items-center">
                        <p className="text-[20px] text-[#12182b]">senha*</p>
                      </div>
                      <input className="w-[320px] h-[40px] rounded-[12px] bg-amber-50" />
                    </div>
                  </div>

                  <div className="w-[320px] h-[19px] text-right">
                    <p>esqueceu sua senha</p>
                  </div>
                </div>

                <button className="w-[140px] h-[40px] bg-[#12182b] rounded-[12px] hover:scale-105 transition-transform cursor-pointer">
                  <p className="text-white">continuar</p>
                </button>
              </div>

              <div className="flex flex-row gap-1">
                <p>ainda nao tem uma conta?</p>
                <button
                  onClick={irParaRegistro}
                  className="hover:scale-105 transition-transform cursor-pointer font-bold"
                >
                  cadastrar
                </button>
              </div>
            </div>
          </div>

          {/* Tela Criar Conta */}
          <div className="w-1/2 h-full bg-[#12182b] flex flex-col justify-center items-center gap-[50px]">
            <h2 className="text-white text-[48px] font-bold">Insira seus dados abaixo:</h2>

            <div className="w-[320px] h-[350px] flex flex-col items-center gap-[20px]">
              <div className="w-[320px] h-[64px]">
                <div className="w-[320px] h-[24px] text-left flex items-center">
                  <p className="text-[20px] text-white">nome de usuario</p>
                </div>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-[320px] h-[40px] rounded-[12px] bg-amber-50"
                />
              </div>

              <div className="w-[320px] h-[64px]">
                <div className="w-[320px] h-[24px] text-left flex items-center">
                  <p className="text-[20px] text-white">digite seu email</p>
                </div>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-[320px] h-[40px] rounded-[12px] bg-amber-50"
                />
              </div>

              <div className="w-[320px] h-[64px]">
                <div className="w-[320px] h-[24px] text-left flex items-center">
                  <p className="text-[20px] text-white">crie sua senha</p>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-[320px] h-[40px] rounded-[12px] bg-amber-50"
                />
              </div>

              <div className="w-[320px] h-[64px]">
                <div className="w-[320px] h-[24px] text-left flex items-center">
                  <p className="text-[20px] text-white">confirme sua senha</p>
                </div>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-[320px] h-[40px] rounded-[12px] bg-amber-50"
                />
              </div>
            </div>

            <button
              onClick={handleRegister}
              className="bg-[#b8a224] text-[#12182b] font-bold px-4 py-2 rounded-[12px] hover:scale-105 transition-transform cursor-pointer"
            >
              Criar conta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
