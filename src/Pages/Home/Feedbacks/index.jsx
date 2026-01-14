import TitleH2 from "../../../Components/TitleH2";
import feedbacklg from "../../../assets/images/feed-desktop.png"
import FeedCarousel from "../../../Components/FeedCarousel";

import "./styles.scss"


export default function Feedback() {

    return (
        <>
            <section id="feedbacks" className="row justify-content-center align-items-center">
                <div className="d-block d-lg-none m-5 gallery-mobile">
                    <div className="mobile-feed-container py-4 px-3">
                        <TitleH2 className="title title-mobile">
                            O que dizem sobre <br /> meu trabalho
                        </TitleH2>
                        <FeedCarousel />
                    </div>

                </div>
                <div className="d-none d-lg-block gallery-desktop">
                    <div className="div-faixa"> </div>
                    <TitleH2 className="title title-desktop">
                        O que dizem sobre <br /> meu trabalho
                    </TitleH2>

                    <div className="feedback-container d-flex">
                        <div className="gallery-content">
                            <img src={feedbacklg} alt="" className="img-fluid" />
                        </div>
                        <div className="div-palette">
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
