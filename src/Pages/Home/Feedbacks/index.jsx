import TitleH2 from "../../../Components/TitleH2";
import GalleryMobile from "../../../Components/GalleryMobile";
import Gallery from "../../../Components/Gallery";
import faixa from "../../../assets/images/background.png"
import "./styles.scss"

import feedback1 from "../../../assets/images/feedback1.jpeg"
import feedback2 from "../../../assets/images/feedback2.jpeg"
import feedback3 from "../../../assets/images/feedback3.jpeg"
import feedback4 from "../../../assets/images/feedback4.jpeg"
import feedback5 from "../../../assets/images/feedback5.jpeg"
import feedback6 from "../../../assets/images/feedback6.jpeg"
import feedback7 from "../../../assets/images/feedback7.jpeg"
import feedback8 from "../../../assets/images/feedback8.jpeg"
import feedback9 from "../../../assets/images/feedback9.jpeg"
import feedback10 from "../../../assets/images/feedback10.jpeg"

export default function Feedback() {

    const images = [
                        feedback1, 
                        feedback2, 
                        feedback3, 
                        feedback4, 
                        feedback5,
                        feedback6,
                        feedback7,
                        feedback8,
                        feedback9,
                        feedback10
                    ]

    return (
        <>
            <section id="feedbacks" className="row justify-content-center align-items-center">
                <div className="d-none">
                    <img 
                        src={faixa}
                        className="h-25 w-100" 
                        alt="faixa de background" 
                    />
                </div>
                <div className="d-block d-lg-none gallery-mobile">
                    <TitleH2>
                        O que dizem sobre
                    </TitleH2>
                    <TitleH2>
                        meu trabalho
                    </TitleH2>
                    <Gallery />
                </div>
                <div className="d-none d-lg-block gallery-desktop">
                    <TitleH2>
                        O que dizem sobre
                    </TitleH2>
                    <TitleH2>
                        meu trabalho
                    </TitleH2>
                    <Gallery />
                </div>
            </section>
        </>
    )
}
