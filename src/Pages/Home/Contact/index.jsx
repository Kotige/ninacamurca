import TitleH2 from "../../../Components/TitleH2";
import Paragraph from "../../../Components/Paragraph"
import PrimaryBtn from "../../../Components/PrimaryBtn";
import BootstrapIcon from "../../../Components/BootstrapIcon";

export default function Contact() {
    return (
        <>
            <section id="contact" className="d-flex justify-content-around">
                <div>
                    <TitleH2>
                        Vamos criar algo juntos?
                    </TitleH2>
                    <Paragraph>
                        Se você precisa de fotos, vídeos, campanhas de tráfego ou conteúdos estratégicos para fortalecer sua marca, estou aqui para te ajudar.
                    </Paragraph>
                    <PrimaryBtn href={"https://wiki.pokexgames.com/index.php/Illusion_Quest#Entrada_do_Covil-2"}>
                        <BootstrapIcon name={"whatsapp"} /> Fale Comigo
                    </PrimaryBtn>
                    <div>
                        <div>
                            <a href="">
                                <BootstrapIcon name={"envelope"} />
                            </a>
                            <a href="">
                                <BootstrapIcon name={"instagram"} />
                            </a>
                            <a href="">
                                <BootstrapIcon name={"whatsapp"} />
                            </a>
                            <a href="">
                                <BootstrapIcon name={"linkedin"} />
                            </a>
                        </div>
                        <div>
                            <a href="">(32) 98860-0655</a>
                            <a href="">camurca.nina@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div>
                    <img 
                        src="https://picsum.photos/300/300" 
                        alt="placeholder" 
                        className="rounded-pill"
                    />
                </div>
            </section>
        </>
    )
}
