import TitleH1 from "../../../Components/TitleH1";
import TitleH4 from "../../../Components/TitleH4"
import PrimaryBtn from "../../../Components/PrimaryBtn";
import BootstrapIcon from "../../../Components/BootstrapIcon";
import nina from "../../../assets/images/profile.png";
import background from "../../../assets/images/background.png"
import "./styles.scss"

export default function Hero() {
    return (
        <>
            <div className="background">
                <img 
                    src={background} 
                    alt="imagem de fundo" 
                />
            </div>
            <section id="home" className="d-flex flex-column justify-content-center align-items-center flex-lg-row pt-lg-5 ps-lg-5">
                <div className="d-flex flex-column align-items-center align-items-lg-start hero-card col-lg-4">
                    <div className="hero-full-title mt-5 mt-lg-3 pt-lg-1">
                        <div className="hero-title-present d-flex flex-row flex-lg-column justify-content-center">
                            <TitleH1 className="hero-title ps-lg-1 mt-lg-5">
                                Olá,
                            </TitleH1>
                            <TitleH1 className="ps-1 hero-title ps-lg-1 mb-lg-1" >
                                eu sou a
                            </TitleH1>
                        </div>
                        <TitleH1 className="hero-title nina">
                            <span>Nina</span>
                        </TitleH1>
                    </div>
                    <TitleH4 className="hero-text text-center mb-4 mx-1 mt-lg-1 text-lg-start ps-lg-1">
                        Transformo ideias em conteúdo, estratégias e resultados.
                    </TitleH4>
                    <PrimaryBtn 
                        href={"https://wa.me/5532988600655?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20seus%20servi%C3%A7os."}
                        className="hero-btn mb-5 ms-lg-2"
                    >
                        <BootstrapIcon 
                            name={"whatsapp"} 
                            className="icon"
                        /> 
                        Fale comigo
                    </PrimaryBtn>
                </div>
                <div className="d-flex justify-content-center align-items-center col-lg-7">
                    <img 
                        src={nina}
                        alt="Nina Camurça foto."
                        className="hero-img"
                    />
                </div>
            </section>
        </>
    )
}
