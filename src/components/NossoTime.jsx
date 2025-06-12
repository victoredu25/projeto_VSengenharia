import MinhaImagem from "../assets/MinhaImagem.png"
import Tartaruga from "../assets/Tartaruga.png"
import Papagaio from "../assets/Papagaio.png"
import FacebookLogo from "../assets/FacebookLogo.png"
import LinkedinLogo from "../assets/LinkedinLogo.png"
import TweterLogo from "../assets/TweterLogo.png"

export default function NossoTime(){
    return(
        <div className="bg-[#A7A6A0] w-full h-[802px] flex flex-col gap-[80px] py-[108px] mx-auto items-center">
            <div>
                <h2
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                  className="text-center font-bold text-[50px]"
                >
                  Nosso incrível time
                </h2>
            </div>

            <div className="flex flex-row gap-[200px]">
                <div className="flex flex-col items-center">
                    <img src={MinhaImagem} alt="minha foto" />
                    <h3
                      style={{ fontFamily: '"Times New Roman", serif' }}
                      className="text-[26px] font-bold"
                    >
                      Victor Eduardo
                    </h3>
                    <p
                      style={{ fontFamily: '"Times New Roman", serif' }}
                      className="text-[18px] font-regular"
                    >
                      Fundador-CEO
                    </p>
                    <div className="flex flex-row gap-[14px]">
                        <img src={FacebookLogo} alt="logo do face" />
                        <img src={LinkedinLogo} alt="logo do linkedin" />
                        <img src={TweterLogo} alt="logo do tweter" />
                    </div>
                </div>

                 <div className="flex flex-col items-center">
                    <img src={Tartaruga} alt="Tartaruga nadando" />
                    <h3
                      style={{ fontFamily: '"Times New Roman", serif' }}
                      className="text-[26px] font-bold"
                    >
                      Victor Eduardo
                    </h3>
                    <p
                      style={{ fontFamily: '"Times New Roman", serif' }}
                      className="text-[18px] font-regular"
                    >
                      Fundador-CEO
                    </p>
                    <div className="flex flex-row gap-[14px]">
                        <img src={FacebookLogo} alt="logo do face" />
                        <img src={LinkedinLogo} alt="logo do linkedin" />
                        <img src={TweterLogo} alt="logo do tweter" />
                    </div>
                </div>

                 <div className="flex flex-col items-center">
                    <img src={Papagaio} alt="Papagaio bonito" />
                    <h3
                      style={{ fontFamily: '"Times New Roman", serif' }}
                      className="text-[26px] font-bold"
                    >
                      Victor Eduardo
                    </h3>
                    <p
                      style={{ fontFamily: '"Times New Roman", serif' }}
                      className="text-[18px] font-regular"
                    >
                      Fundador-CEO
                    </p>
                    <div className="flex flex-row gap-[14px]">
                        <img src={FacebookLogo} alt="logo do face" />
                        <img src={LinkedinLogo} alt="logo do linkedin" />
                        <img src={TweterLogo} alt="logo do tweter" />
                    </div>
                </div>
            </div>

            <div>
                <p
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                  className="text-center text-[20px]"
                >
                  Uma equipe extremamente preparada e capacitada para realizar seus serviços.
                </p>
            </div>
        </div>
    );
}
