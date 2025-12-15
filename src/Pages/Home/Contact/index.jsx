import TitleH2 from "../../../Components/TitleH2";
import Paragraph from "../../../Components/Paragraph"
import PrimaryBtn from "../../../Components/PrimaryBtn";
import BootstrapIcon from "../../../Components/BootstrapIcon";
import ninaCircle from "../../../assets/images/nina-ass.png";
import "./styles.scss";

export default function Contact() {
    return (
        <>
            <section id="contact" className="d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <TitleH2 className="contact-title">
                        Vamos criar algo juntos?
                    </TitleH2>
                    <Paragraph className="contact-paragraph lh-1">
                        Se você precisa de fotos, vídeos, campanhas de tráfego ou conteúdos estratégicos para fortalecer sua marca, estou aqui para te ajudar.
                    </Paragraph>
                    <div className="d-flex justify-content-center">
                        <img 
                            src= {ninaCircle}
                            alt="placeholder" 
                            className="contact-img"
                        />
                </div>
                    <PrimaryBtn 
                        href={"https://wiki.pokexgames.com/index.php/Illusion_Quest#Entrada_do_Covil-2"}
                    >
                        <BootstrapIcon name={"whatsapp"} /> Fale Comigo
                    </PrimaryBtn>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <div className="my-5 d-flex gap-4">
                            <a href="" className="contact-link">
                                <BootstrapIcon name={"envelope"} />
                            </a>
                            <a href="" className="contact-link">
                                <BootstrapIcon name={"instagram"}/>
                            </a>
                            <a href="" className="contact-link">
                                <BootstrapIcon name={"whatsapp"}/>
                            </a>
                            <a href="" className="contact-link">
                                <BootstrapIcon name={"linkedin"}/>
                            </a>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center contact-info">
                            <a href="">(32) 98860-0655</a>
                            <a href="">camurca.nina@gmail.com</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
