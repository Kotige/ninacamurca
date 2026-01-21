// Heroes
import aftermovieHero from "../assets/images/services/aftermovie/after-hero.png"
import adsHero from "../assets/images/services/ads/ads-hero.png"
import coberturaHero from "../assets/images/services/cobertura/cobertura-hero.png"
import produtoHero from "../assets/images/services/produtos/produto-hero.png"
import reelsHero from "../assets/images/services/reels/reels-hero.png"
import socialmediaHero from "../assets/images/services/socialmedia/socialmedia-hero.png"
import trafegoHero from "../assets/images/services/trafego/trafego-hero.png"

// GALLERY MEDIA

// Aftermovie 
import aftermovie01 from "../assets/images/services/aftermovie/after-01.mov"
import aftermovie02 from "../assets/images/services/aftermovie/after-02.mov"

// ADS 
import ads01 from "../assets/images/services/ads/ads-01.mp4"
import ads02 from "../assets/images/services/ads/ads-02.mp4"

// Cobertura 
import cobertura01 from "../assets/images/services/cobertura/cobertura-01.jpeg"
import cobertura02 from "../assets/images/services/cobertura/cobertura-02.jpeg"
import cobertura03 from "../assets/images/services/cobertura/cobertura-03.jpeg"
import cobertura04 from "../assets/images/services/cobertura/cobertura-04.jpeg"
import cobertura05 from "../assets/images/services/cobertura/cobertura-05.jpeg"
import cobertura06 from "../assets/images/services/cobertura/cobertura-06.jpeg"
import cobertura07 from "../assets/images/services/cobertura/cobertura-07.jpeg"
import cobertura08 from "../assets/images/services/cobertura/cobertura-08.jpeg"
import cobertura09 from "../assets/images/services/cobertura/cobertura-09.jpeg"
import cobertura10 from "../assets/images/services/cobertura/cobertura-10.jpeg"
import cobertura11 from "../assets/images/services/cobertura/cobertura-11.jpeg"
import cobertura12 from "../assets/images/services/cobertura/cobertura-12.jpeg"

// Produtos 
import produto01 from "../assets/images/services/produtos/produto-01.jpeg"
import produto02 from "../assets/images/services/produtos/produto-02.jpeg"
import produto03 from "../assets/images/services/produtos/produto-03.jpeg"
import produto04 from "../assets/images/services/produtos/produto-04.jpeg"
import produto05 from "../assets/images/services/produtos/produto-05.jpg"
import produto06 from "../assets/images/services/produtos/produto-06.jpg"
import produto07 from "../assets/images/services/produtos/produto-07.jpeg"
import produto08 from "../assets/images/services/produtos/produto-08.jpeg"
import produto09 from "../assets/images/services/produtos/produto-09.jpeg"
import produto10 from "../assets/images/services/produtos/produto-10.jpeg"

// Reels 
import reels01 from "../assets/images/services/reels/reels-01.mov"
import reels02 from "../assets/images/services/reels/reels-02.mov"
import reels03 from "../assets/images/services/reels/reels-03.mov"
import reels04 from "../assets/images/services/reels/reels-04.mov"

// Social Media 
import socialmedia01 from "../assets/images/services/socialmedia/socialmedia-01.mov"
import socialmedia02 from "../assets/images/services/socialmedia/socialmedia-02.mov"
import socialmedia03 from "../assets/images/services/socialmedia/socialmedia-03.mov"

// Tráfego
import trafego01 from "../assets/images/services/trafego/trafego-01.jpg"
import trafego02 from "../assets/images/services/trafego/trafego-02.jpg"

export const services = [
    // Aftermovie
    {
        slug: "aftermovie",
        title: "Aftermovie/Institucional",

        description: (
            <>
                <p className="text-center text-md-start">
                    Produção de vídeos institucionais e aftermovies que <strong>resgistram experiências, reforçam identidade</strong> e contam histórias com impacto visual.
                </p>
            </>
        ),

        heroImage: aftermovieHero,

        gallery: {
            title: "Galeria de Projetos",
            description: "Alguns exemplos visuais de trabalhos realizados nesse serviço.",

            media: [
                {
                    type: "video",
                    src: aftermovie01,
                },
                {
                    type: "video",
                    src: aftermovie02,
                },
            ] 
        },
    },
    // Ensaio de produtos
    {
        slug: "ensaio-de-produto",
        title: "Ensaio de Produto",

        description: (
            <>
                <p className="text-center text-md-start">
                    Fotografia de produtos com direção estética, iluminação cuidadosa e <span>foco em valorizar a identidade da marca</span>.
                </p>
            </>
        ),

        heroImage: produtoHero,

        gallery: {
            title: "Galeria de Projetos",
            description: "Alguns exemplos visuais de trabalhos realizados nesse serviço.",

            media: [
                {
                    type: "image",
                    src: produto01,
                },
                {
                    type: "image",
                    src: produto02,
                },
                {
                    type: "image",
                    src: produto03,
                },
                {
                    type: "image",
                    src: produto04,
                },
                {
                    type: "image",
                    src: produto05,
                },
                {
                    type: "image",
                    src: produto06,
                },
                {
                    type: "image",
                    src: produto07,
                },
                {
                    type: "image",
                    src: produto08,
                },
                {
                    type: "image",
                    src: produto09,
                },
                {
                    type: "image",
                    src: produto10,
                },
            ]
        },
    },
    // Reels
    {
        slug: "reels-social-media",
        title: "Reels (Redes Sociais)",

        description:( 
            <>
                <p className="text-center text-md-start">
                    Captação e edição de vídeos verticais pensados para redes sociais, com ritmo, estética e <strong>foco em engajamento</strong>.
                </p>
            </>
        ),

        heroImage: reelsHero,

        gallery: {
            title: "Galeria de Projetos",
            description: "Alguns exemplos visuais de trabalhos realizados nesse serviço.",

            media: [
                {
                    type: "video",
                    src: reels01,
                },
                {
                    type: "video",
                    src: reels02,
                },
                {
                    type: "video",
                    src: reels03,
                },
                {
                    type: "video",
                    src: reels04,
                },
            ]
        },
    },
    // Socail Media
    {
        slug: "social-media",
        title: "Social Media",

        description: (
            <>
                <p className="text-center text-md-start">
                    <strong>Gestão de redes sociais com estratégia</strong>, criação de conteúdo e consistência para fortalecer presença e engajamento da marca.
                </p>
            </>
        ),

        heroImage: socialmediaHero,

        gallery: {
            title: "Galeria de Projetos",
            description: "Alguns exemplos visuais de trabalhos realizados nesse serviço.",

            media: [
                {
                    type: "video",
                    src: socialmedia01,
                },
                {
                    type: "video",
                    src: socialmedia02,
                },
                {
                    type: "video",
                    src: socialmedia03,
                },
            ]
        },
    },
    // Tráfego Pago
    {
        slug: "trafego-pago",
        title: "Tráfego Pago",

        description: (
            <>
                <p className="text-center text-md-start">
                    Planejamento, criação e otimização de campanhas de tráfego pago com foco em <span>alcance qualificado, conversão e resultados</span>.
                </p>
            </>
        ),

        heroImage: trafegoHero,

        gallery: {
            title: "Galeria de Projetos",
            description: "Alguns exemplos visuais de trabalhos realizados nesse serviço.",

            media: [
                {
                    type: "image",
                    src: trafego01,
                },
                {
                    type: "image",
                    src: trafego02,
                },
            ]
        },
    },
    // Cobertura Fotográfica
    {
        slug: "cobertura-fotografica",
        title: "Cobertura Fotográfica",

        description: (
            <>
                <p className="text-center text-md-start">
                    Registro fotográfico profissional de <strong>eventos corporativos, culturais, sociais ou institucionais</strong>.
                </p>
            </>
        ),

        heroImage: coberturaHero,

        gallery: {
            title: "Galeria de Projetos",
            description: "Alguns exemplos visuais de trabalhos realizados nesse serviço.",

            media: [
                {
                    type: "image",
                    src: cobertura01,
                },
                {
                    type: "image",
                    src: cobertura02,
                },
                {
                    type: "image",
                    src: cobertura03,
                },
                {
                    type: "image",
                    src: cobertura04,
                },
                {
                    type: "image",
                    src: cobertura05,
                },
                {
                    type: "image",
                    src: cobertura06,
                },
                {
                    type: "image",
                    src: cobertura07,
                },
                {
                    type: "image",
                    src: cobertura08,
                },
                {
                    type: "image",
                    src: cobertura09,
                },
                {
                    type: "image",
                    src: cobertura10,
                },
                {
                    type: "image",
                    src: cobertura11,
                },
                {
                    type: "image",
                    src: cobertura12,
                },
            ]
        },
    },
    // ADS
    {
        slug: "ads",
        title: "ADS",

        description: (
            <>
                <p className="text-center text-md-start">
                    Gestão estratégica e criação de aúncios feitos para <strong>maximizar alcance, atrair o público certo e potencializar resultados</strong>.
                </p>
            </>
        ),

        heroImage: adsHero,

        gallery: {
            title: "Galeria de Projetos",
            description: "Alguns exemplos visuais de trabalhos realizados nesse serviço.",

            media: [
                {
                    type: "video",
                    src: ads01,
                },
                {
                    type: "video",
                    src: ads02,
                },
            ]
        },
    },
]