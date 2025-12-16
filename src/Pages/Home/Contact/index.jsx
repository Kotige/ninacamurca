import TitleH2 from "../../../Components/TitleH2";
import Paragraph from "../../../Components/Paragraph"
import PrimaryBtn from "../../../Components/PrimaryBtn";
import BootstrapIcon from "../../../Components/BootstrapIcon";
import ninaCircle from "../../../assets/images/nina-ass.png";
import "./styles.scss";

export default function Contact() {
    return (
        <>
            <section id="contact" className="row rol-1 rol-lg-2 justify-content-center align-items-center">
                <div className="row justify-content-center align-items-center container-lg">
                    <div className="col-lg-6">
                        <TitleH2 className="contact-title">
                            Vamos criar algo juntos?
                        </TitleH2>
                        <Paragraph className="contact-paragraph lh-1">
                            Se você precisa de fotos, vídeos, campanhas de tráfego ou conteúdos estratégicos para fortalecer sua marca, estou aqui para te ajudar.
                        </Paragraph>
                        <PrimaryBtn 
                            href={"https://wiki.pokexgames.com/index.php/Illusion_Quest#Entrada_do_Covil-2"}
                            className="col-6 d-none d-lg-block"
                        >
                            <BootstrapIcon name={"whatsapp"} /> Fale Comigo
                        </PrimaryBtn>
                        <div className="d-none d-lg-flex flex-row mt-3">
                            <div className="d-flex flex-row  align-items-baseline gap-3">
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
                            <div className="d-flex flex-column contact-info flex-row justify-content-center ps-5">
                                <a 
                                    href=""
                                    className=""
                                >
                                    (32) 98860-0655
                                </a>
                                <a 
                                    href=""
                                    className=""
                                >camurca.nina@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="row col-lg-6 justify-content-center">
                        <img 
                            src= {ninaCircle}
                            alt="placeholder" 
                            className="contact-img"
                        />
                        <PrimaryBtn 
                            href={"https://wiki.pokexgames.com/index.php/Illusion_Quest#Entrada_do_Covil-2"}
                            className="col-6 d-lg-none"
                        >
                            <BootstrapIcon name={"whatsapp"} /> Fale Comigo
                        </PrimaryBtn>
                    </div>
                    <div className="d-lg-none row row-1 justify-content-center align-items-center">
                        <div className="my-5 d-flex gap-4 justify-content-center align-items-center">
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
                        <div className="row row-1 justify-content-center align-items-center contact-info">
                            <a 
                                href=""
                                className="row row-1 justify-content-center"
                            >
                                (32) 98860-0655
                            </a>
                            <a 
                                href=""
                                className="row row-1 justify-content-center"
                            >camurca.nina@gmail.com</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
