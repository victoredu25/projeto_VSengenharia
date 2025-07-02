import { useState } from "react";
import FotoLogin from "../assets/FotoLogin.png";

export default function PopupLogin({ onClose, onLoginSuccess }) {
  const [tela, setTela] = useState("login");

  // Estados dos inputs do login
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [mostrarSenhaLogin, setMostrarSenhaLogin] = useState(false);

  // Estados do registro
  const [name, setName] = useState("");
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
      const response = await fetch(
        "https://backendvsengenharia.onrender.com/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Conta criada com sucesso!");
        irParaLogin();
      } else {
        alert(data.error || "Erro ao registrar.");
      }
    } catch (error) {
      console.error("Erro ao registrar:", error);
      alert("Erro ao registrar.");
    }
  };

  const handleLogin = async () => {
    if (loginEmail === "" || loginPassword === "") {
      alert("Preencha email e senha");
      return;
    }

    // Aqui você pode colocar sua requisição real de login (fetch)
    // Vou simular sucesso direto:

    alert("Login realizado com sucesso!");
    onLoginSuccess(); // AVISA O APP QUE DEU CERTO
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
              <img src={FotoLogin} alt="construcao" />
            </div>

            <div className="bg-[#b8a224] w-[450px] h-[710px] flex flex-col items-center gap-[120px] px-[42px] py-[50px]">
              <h1 className="text-[60px] font-bold mb-2 text-[#12182b]">
                Bem vindo
              </h1>

              <div className="flex flex-col items-center gap-[30px]">
                <div className="flex flex-col items-center w-[320px] h-[170px]">
                  <div className="w-[320px] h-[148px] flex flex-col items-center gap-[20px]">
                    <div className="w-[320px] h-[64px]">
                      <div className="w-[320px] h-[24px] text-left flex items-center">
                        <p className="text-[20px] text-[#12182b]">e-mail*</p>
                      </div>
                      <input
                        type="email"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        className="w-[320px] h-[40px] rounded-[12px] bg-amber-50 px-3"
                        placeholder="seuemail@exemplo.com"
                      />
                    </div>

                    <div className="w-[320px] h-[64px] flex flex-col items-center relative">
                      <div className="w-[320px] h-[24px] text-left flex items-center">
                        <p className="text-[20px] text-[#12182b]">senha*</p>
                      </div>
                      <input
                        type={mostrarSenhaLogin ? "text" : "password"}
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        className="w-[320px] h-[40px] rounded-[12px] bg-amber-50 px-3 pr-10"
                        placeholder="Sua senha"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setMostrarSenhaLogin(!mostrarSenhaLogin)
                        }
                        className="absolute right-3 top-[36px] text-[#12182b] hover:text-black"
                        aria-label={
                          mostrarSenhaLogin ? "Esconder senha" : "Mostrar senha"
                        }
                      >
                        {mostrarSenhaLogin ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10a9.958 9.958 0 013.448-7.394M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 3l18 18"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="w-[320px] h-[19px] text-right">
                    <p>esqueceu sua senha</p>
                  </div>
                </div>

                <button
                  onClick={handleLogin}
                  className="w-[140px] h-[40px] bg-[#12182b] rounded-[12px] hover:scale-105 transition-transform cursor-pointer"
                >
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
            <h2 className="text-white text-[48px] font-bold">
              Insira seus dados abaixo:
            </h2>

            <div className="w-[320px] h-[350px] flex flex-col items-center gap-[20px]">
              <div className="w-[320px] h-[64px]">
                <div className="w-[320px] h-[24px] text-left flex items-center">
                  <p className="text-[20px] text-white">nome de usuario</p>
                </div>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-[320px] h-[40px] rounded-[12px] bg-amber-50 px-3"
                />
              </div>

              <div className="w-[320px] h-[64px]">
                <div className="w-[320px] h-[24px] text-left flex items-center">
                  <p className="text-[20px] text-white">digite seu email</p>
                </div>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-[320px] h-[40px] rounded-[12px] bg-amber-50 px-3"
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
                  className="w-[320px] h-[40px] rounded-[12px] bg-amber-50 px-3"
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
                  className="w-[320px] h-[40px] rounded-[12px] bg-amber-50 px-3"
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
