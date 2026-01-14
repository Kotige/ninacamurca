import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TitleH5 from "./TitleH5";
import DescriptionP from "./DescriptionP";
import cover1 from "../../assets/images/cover1.png";
import cover2 from "../../assets/images/cover2.png";
import cover3 from "../../assets/images/cover3.png";
import cover4 from "../../assets/images/cover4.png";
import cover5 from "../../assets/images/cover5.png";
import cover6 from "../../assets/images/cover6.png";
import cover7 from "../../assets/images/cover7.png";
import cover8 from "../../assets/images/cover8.png";
import "./styles.scss";

export default function Carousel() {
    const items = [
        {
            title: "Cobertura Fotográfica",
            description:
                "Registro fotográfico profissional de eventos corporativos, culturais, sociais ou institucionais.",
            image: cover1,
            link: "https://google.com",
        },
        {
            title: "Reels (Redes Sociais)",
            description:
                "Criação de vídeos dinâmicos e profissionais para marcas, eventos, campanhas e redes sociais.",
            image: cover2,
            link: "https://google.com",
        },
        {
            title: "Aftermovie/Institucional",
            description:
                "Produção de vídeos em formato aftermovie ou mini-documentário, perfeitos para registrar a essência de eventos, projetos e histórias.",
            image: cover3,
            link: "https://google.com",
        },
        {
            title: "Ensaio de Produto",
            description:
                "Fotografia de produtos com composição cuidadosa, iluminação adequada e estética alinhada ao posicionamento da marca.",
            image: cover4,
            link: "https://google.com",
        },
        {
            title: "Tráfego Pago",
            description: "Gerenciamento de campanhas de tráfego paago para anúncios em Meta Ads e outras plataformas.",
            image: cover7,
            link: "https://google.com",
        },
        {
            title: "Social Midia",
            description:
                "Criação e gestão de conteúdos visuais completos para redes sociais: fotos, vídeos, reels, animações ou peças personalizadas.",
            image: cover6,
            link: "https://google.com",
        },
        {
            title: "ADS",
            description:
                "Gestão estratégica e criação de anúncios feitos para maximizar alcance, atrair o público certo e potencializar resultados.",
            image: cover8,
            link: "https://google.com",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const rightIndex = (currentIndex + 1) % items.length;
    const leftIndex = currentIndex;

    const nextDesktop = () => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
    };

    const prevDesktop = () => {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    // mobile always shows only 1 item
    const nextMobile = nextDesktop;
    const prevMobile = prevDesktop;

    const handleClickTitle = (i) => {
        setCurrentIndex(rightIndex); // right moves left
        // clicked becomes new right
        const distance = (i - currentIndex + items.length) % items.length;
        if (distance === 1) return; // already right
        setCurrentIndex(i - 1 < 0 ? items.length - 1 : i - 1);
    };

    return (
        <Container className="carousel-services py-4">
            {/* MOBILE VERSION */}
            <div className="carousel-mobile">
                <div className="text-center mb-2 current-title">
                    <TitleH5>{items[currentIndex].title}</TitleH5>
                </div>

                <div className="text-center mb-3">
                    <DescriptionP>{items[currentIndex].description}</DescriptionP>
                </div>

                <Row className="align-items-center justify-content-center">
                    <Col xs="2" className="d-flex justify-content-center">
                        <ChevronLeft className="arrow" onClick={prevMobile} />
                    </Col>

                    <Col xs="8" className="text-center">
                        <a href={items[currentIndex].link} target="_blank" rel="noopener noreferrer">
                            <img
                                src={items[currentIndex].image}
                                alt={items[currentIndex].title}
                                className="carousel-image"
                            />
                        </a>
                    </Col>

                    <Col xs="2" className="d-flex justify-content-center">
                        <ChevronRight className="arrow" onClick={nextMobile} />
                    </Col>
                </Row>
            </div>

            {/* DESKTOP VERSION */}
            <div className="carousel-desktop">
                <Row className="align-items-center justify-content-center desktop-layout">
                    <Col lg="1" className="d-flex justify-content-center">
                        <ChevronLeft className="arrow" onClick={prevDesktop} />
                    </Col>

                    <Col lg="5" className="carousel-item-desktop">
                        <TitleH5 className="current-title">{items[leftIndex].title}</TitleH5>
                        <DescriptionP className="desktop-description">{items[leftIndex].description}</DescriptionP>
                        <img
                            src={items[leftIndex].image}
                            alt={items[leftIndex].title}
                            className="carousel-image"
                        />
                    </Col>

                    <Col lg="5" className="carousel-item-desktop">
                        <TitleH5 className="current-title">{items[rightIndex].title}</TitleH5>
                        <DescriptionP className="desktop-description">{items[rightIndex].description}</DescriptionP>
                        <div className="carousel-img-div w-100 d-flex justify-content-start">
                            <img
                                src={items[rightIndex].image}
                                alt={items[rightIndex].title}
                                className="carousel-image"
                            />
                        </div>
                    </Col>

                    <Col lg="1" className="d-flex justify-content-center">
                        <ChevronRight className="arrow" onClick={nextDesktop} />
                    </Col>
                </Row>
            </div>

            {/* Titles list (shared) */}
            <div className="titles-list mt-3">
                {items.map((item, index) =>
                    index !== currentIndex &&
                    index !== rightIndex && (
                        <button
                            key={item.title}
                            onClick={() => handleClickTitle(index)}
                            className="title-button"
                        >
                            <TitleH5>{item.title}</TitleH5>
                        </button>
                    )
                )}
            </div>
        </Container>
    );
}
