import nina from "../../../assets/images/contact/1.png"
import { FaWhatsapp, FaInstagram, FaRegEnvelope, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="flex justify-center text-center md:text-start md:pb-16">
            <div className="flex flex-col md:flex-row items-center md:items-start md:gap-16">
                <div>
                    <h2 className="text-3xl md:ms-40">Vamos criar algo juntos?</h2>
                    <p className="mx-6 md:ms-40 my-6">
                        Se você precisa de fotos, vídeos, campanhas de tráfego ou conteúdos estratégicos para fortalecer sua marca, estou aqui para te ajudar.
                    </p>
                    <a
                        href="https://wa.me/5532988600655"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Whatsapp da Nina"
                        className="hidden md:inline-flex items-center justify-center mt-3 ms-40 px-6 py-1 bg-[#5A4A3B] text-[#F2E6D8] text-lg hover:opacity-80 styled-border"
                    >
                        <FaWhatsapp className="me-2" size={20} />
                        Fale comigo
                    </a>
                    <div className="hidden md:flex my-5 justify-start items-center gap-4 ms-40">
                        <a
                            href="mailto:camurca.nina@gmail.com"
                            aria-label="Envie um email para Nina"
                            className="bg-[#25241F] text-[#F2E6D8] text-lg p-1 rounded-lg hover:opacity-80"
                        >
                            <FaRegEnvelope size={34} />
                        </a>
                        <a
                            href="https://www.instagram.com/ninotica_?igsh=MTA3cmd5YnEzZWt5aA=="
                            aria-label="Instagram da Nina"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#25241F] text-[#F2E6D8] text-lg p-1 rounded-lg hover:opacity-80"
                        >
                            <FaInstagram size={34} />
                        </a>
                        <a 
                            href="https://wa.me/5532988600655?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20seus%20servi%C3%A7os."
                            aria-label="Envie uma mensagem no whatsapp da Nina"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#25241F] text-[#F2E6D8] text-lg p-1 rounded-lg hover:opacity-80"
                        >
                            <FaWhatsapp size={34} />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/nina-pissolato-camur%C3%A7a-522560240/?originalSubdomain=br"
                            aria-label="Linkedin da Nina"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#25241F] text-[#F2E6D8] text-lg p-1 rounded-lg hover:opacity-80"
                        >
                            <FaLinkedinIn size={34} />
                        </a>
                        <div className="ml-4">
                            <a 
                                href="https://wa.me/5532988600655?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20seus%20servi%C3%A7os." 
                                aria-label="Entre em contato com Nina pelo whatsapp" rel="noopener noreferrer" 
                                target="_blank"
                            >
                                (32) 98860-0655
                            </a>
                            <br />
                            <a 
                                href="mailto:camurca.nina@gmail.com"
                                aria-label="Envie um email para Nina"
                            >
                                camurca.nina@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <img 
                        src={nina} 
                        alt="Nina Camurça" 
                        loading="lazy"
                        className="w-[60%] md:w-[100%] md:me-24 lg:w-[60%]"
                    />
                    <a
                        href="https://wa.me/5532988600655"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Whatsapp da Nina"
                        className="inline-flex md:hidden items-center justify-center mt-5 mx-14 px-6 py-1 bg-[#5A4A3B] text-[#F2E6D8] text-lg hover:opacity-80 styled-border"
                    >
                        <FaWhatsapp className="me-2" size={20} />
                        Fale comigo
                    </a>

                        <div className="flex md:hidden my-5 justify-center gap-4">
                            <a
                                href="mailto:camurca.nina@gmail.com"
                                aria-label="Envie um email para Nina"
                                className="bg-[#25241F] text-[#F2E6D8] text-lg p-1 rounded-lg hover:opacity-80"
                            >
                                <FaRegEnvelope size={34} />
                            </a>
                            <a
                                href="https://www.instagram.com/ninotica_?igsh=MTA3cmd5YnEzZWt5aA=="
                                aria-label="Instagram da Nina"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#25241F] text-[#F2E6D8] text-lg p-1 rounded-lg hover:opacity-80"
                            >
                                <FaInstagram size={34} />
                            </a>
                            <a 
                                href="https://wa.me/5532988600655?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20seus%20servi%C3%A7os."
                                aria-label="Envie uma mensagem no whatsapp da Nina"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#25241F] text-[#F2E6D8] text-lg p-1 rounded-lg hover:opacity-80"
                            >
                                <FaWhatsapp size={34} />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/nina-pissolato-camur%C3%A7a-522560240/?originalSubdomain=br"
                                aria-label="Linkedin da Nina"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#25241F] text-[#F2E6D8] text-lg p-1 rounded-lg hover:opacity-80"
                            >
                                <FaLinkedinIn size={34} />
                            </a>
                        </div>

                        <div className="flex md:hidden flex-col mt-5">
                            <a 
                                href="https://wa.me/5532988600655?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20seus%20servi%C3%A7os." 
                                aria-label="Entre em contato com Nina pelo whatsapp" rel="noopener noreferrer" 
                                target="_blank"
                            >
                                (32) 98860-0655
                            </a>
                            <a 
                                href="mailto:camurca.nina@gmail.com"
                                aria-label="Envie um email para Nina"
                            >
                                camurca.nina@gmail.com
                            </a>
                        </div>
                </div>
            </div>
        </section>
    )
}