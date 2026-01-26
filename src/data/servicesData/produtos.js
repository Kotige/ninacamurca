import hero from "../../assets/images/servicePage/produtos/produto-hero.png"

import produto01 from "../../assets/images/servicePage/produtos/produto-01.jpeg"
import produto02 from "../../assets/images/servicePage/produtos/produto-02.jpeg"
import produto03 from "../../assets/images/servicePage/produtos/produto-03.jpeg"
import produto04 from "../../assets/images/servicePage/produtos/produto-04.jpeg"
import produto05 from "../../assets/images/servicePage/produtos/produto-05.jpg"
import produto06 from "../../assets/images/servicePage/produtos/produto-06.jpg"
import produto07 from "../../assets/images/servicePage/produtos/produto-07.jpeg"
import produto08 from "../../assets/images/servicePage/produtos/produto-08.jpeg"
import produto09 from "../../assets/images/servicePage/produtos/produto-09.jpeg"
import produto10 from "../../assets/images/servicePage/produtos/produto-10.jpeg"


export default {
    slug: "ensaio-de-produto",
    title: "Ensaio de Produto",
    description: "Fotografia de produtos com direção estética, iluminação e foco em valorizar a identidade da marca.",

    heroImage: hero,

    gallery: {
        title: "Galeria de Projetos",
        description: "Alguns exemplos visuais de trabalhos realizados nesse serviço.",

        media: [
            {type: "image", src: produto01},
            {type: "image", src: produto02},
            {type: "image", src: produto03},
            {type: "image", src: produto04},
            {type: "image", src: produto05},
            {type: "image", src: produto06},
            {type: "image", src: produto07},
            {type: "image", src: produto08},
            {type: "image", src: produto09},
            {type: "image", src: produto10},
        ],
    }
}