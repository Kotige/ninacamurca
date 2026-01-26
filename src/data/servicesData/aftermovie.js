import hero from "../../assets/images/servicePage/aftermovie/after-hero.png"

import after01 from "../../assets/images/servicePage/aftermovie/after-01.mov"
import after02 from "../../assets/images/servicePage/aftermovie/after-02.mov"

export default {
    slug: "aftermovie",
    title: "Aftermovie/Institucional",
    description: "Produção de vídeos institucionais e aftermovies que registram experiências, reforçam identidades e contam histórias com impacto visual.",

    heroImage: hero,

    gallery: {
        title: "Galeria de Projetos",
        description: "Alguns exemplos visuais de trabalhos realizados nesse serviço.",

        media: [
            {type: "video", src: after01},
            {type: "video", src: after02},
        ],
    }
}