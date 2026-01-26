import hero from "../../assets/images/servicePage/ads/ads-hero.png"

import ads01 from "../../assets/images/servicePage/ads/ads-01.mp4"
import ads02 from "../../assets/images/servicePage/ads/ads-02.mp4"

export default {
    slug: "ads",
    title: "ADS",
    description: "Gestão estratégica e criação de aúncios feitos para maximizar alcance, atrair o público certo e potencializar resultados.",

    heroImage: hero,

    gallery: {
        title: "Galeria de Projetos",
        description: "Alguns exemplos visuais de trabalhos realizados nesse serviço.",

        media: [
            {type: "video", src: ads01},
            {type: "video", src: ads02},
        ],
    }
}