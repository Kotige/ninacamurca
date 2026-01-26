import hero from "../../assets/images/servicePage/reels/reels-hero.png"

import reels01 from "../../assets/images/servicePage/reels/reels-01.mov"
import reels02 from "../../assets/images/servicePage/reels/reels-02.mov"
import reels03 from "../../assets/images/servicePage/reels/reels-03.mov"
import reels04 from "../../assets/images/servicePage/reels/reels-04.mov"

export default {
    slug: "reels-redes-sociais",
    title: "Reels (Redes Sociais)",
    description: "Captação e edição de vídeos verticais pensados para redes sociais, com ritmo, estética e foco em engajamento.",

    heroImage: hero,

    gallery: {
        title: "Galeria de Projetos",
        description: "Alguns exemplos visuais de trabalhos realizados nesse serviço.",

        media: [
            {type: "video", src: reels01},
            {type: "video", src: reels02},
            {type: "video", src: reels03},
            {type: "video", src: reels04},
        ],
    }
}