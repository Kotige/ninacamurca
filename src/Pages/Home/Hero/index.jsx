import TitleH1 from "../../../Components/TitleH1";
import TitleH4 from "../../../Components/TitleH4"
import PrimaryBtn from "../../../Components/PrimaryBtn";
import BootstrapIcon from "../../../Components/BootstrapIcon";
import "./styles.scss"

export default function Hero() {
    return (
        <>
            <section id="home" className="d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div>
                        <TitleH1 className="hero-title">
                            Olá, eu sou a
                        </TitleH1>
                        <TitleH1 className="hero-title">
                            <span>Nina</span>
                        </TitleH1>
                    </div>
                    <TitleH4 className="hero-text">
                        Transformo ideias em imagens, estratégias e resultados.
                    </TitleH4>
                    <PrimaryBtn 
                        href={"https://wiki.pokexgames.com/index.php/Illusion_Quest#Entrada_do_Covil-2"}
                        className="hero-btn"
                    >
                        <BootstrapIcon 
                            name={"whatsapp"} 
                            className="icon"
                        /> 
                        Fale Comigo
                    </PrimaryBtn>
                </div>
                <div>
                    <img 
                        src="https://picsum.photos/250/350" 
                        alt="placeholder"
                        className="hero-img"
                    />
                </div>
            </section>
        </>
    )
}
