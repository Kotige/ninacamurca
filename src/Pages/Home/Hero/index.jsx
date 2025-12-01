import TitleH1 from "../../../Components/TitleH1";
import TitleH4 from "../../../Components/TitleH4"
import PrimaryBtn from "../../../Components/PrimaryBtn";
import BootstrapIcon from "../../../Components/BootstrapIcon";
import "./styles.scss"

export default function Hero() {
    return (
        <>
            <section id="home" className="d-flex flex-column justify-content-center flex-lg-row justify-content-lg-around align-items-center mt-lg-5 mb-lg-5">
                <div className="d-flex flex-column align-items-center hero-card">
                    <div className="hero-full-title">
                        <div className="d-flex flex-row justify-content-center align-items-center mt-5 flex-lg-column hero-title-present">
                            <TitleH1 className="hero-title col-lg-12 ">
                                Olá,
                            </TitleH1>
                            <TitleH1 className="hero-title col-lg-12" >
                                eu sou a
                            </TitleH1>
                        </div>
                        <TitleH1 className="hero-title col-lg-12">
                            <span>Nina</span>
                        </TitleH1>
                    </div>
                    <TitleH4 className="hero-text col-lg-12">
                        Transformo ideias em imagens, estratégias e resultados.
                    </TitleH4>
                    <PrimaryBtn 
                        href={"https://wiki.pokexgames.com/index.php/Illusion_Quest#Entrada_do_Covil-2"}
                        className="hero-btn col-lg-12"
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
