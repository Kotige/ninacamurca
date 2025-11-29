import TitleH1 from "../../../Components/TitleH1";
import TitleH4 from "../../../Components/TitleH4"
import PrimaryBtn from "../../../Components/PrimaryBtn";
import BootstrapIcon from "../../../Components/BootstrapIcon";

export default function Hero() {
    return (
        <>
            <section id="home" className="d-flex justify-content-around">
                <div>
                    <TitleH1>
                        Olá, eu sou a <span>Nina</span>
                    </TitleH1>
                    <TitleH4>
                        Transformo ideias em imagens, estratégias e resultados.
                    </TitleH4>
                    <PrimaryBtn href={"https://wiki.pokexgames.com/index.php/Illusion_Quest#Entrada_do_Covil-2"}>
                        <BootstrapIcon name={"whatsapp"} /> Fale Comigo
                    </PrimaryBtn>
                </div>
                <div>
                    <img 
                        src="https://picsum.photos/300/500" 
                        alt="placeholder" 
                    />
                </div>
            </section>
        </>
    )
}
