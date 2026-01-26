import hero from "../../assets/images/servicePage/social/socialmedia-hero.png"

import socialmedia01 from "../../assets/images/servicePage/social/socialmedia-01.mov"
import socialmedia02 from "../../assets/images/servicePage/social/socialmedia-02.mov"
import socialmedia03 from "../../assets/images/servicePage/social/socialmedia-03.mov"

export default {
    slug: "social-media",
    title: "Social Media",
    description: "Gestão de redes sociais com estratégia, criação de conteúdo e consistência para fortalecer presença e engajamento da marca.",

    heroImage: hero,

    gallery: {
        title: "Galeria de Projetos",
        description: "Alguns exemplos visuais de trabalhos realizados nesse serviço.",

        media: [
            {type: "video", src: socialmedia01},
            {type: "video", src: socialmedia02},
            {type: "video", src: socialmedia03},
        ],
    }
}