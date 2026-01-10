import TitleH2 from "../../../Components/TitleH2";
import GalleryDesktop from "../../../Components/GalleryDesktop";
import ImageMosaic from "../../../Components/ImageMosaic";

import "./styles.scss"


export default function Feedback() {

    return (
        <>
            <section id="feedbacks" className="row justify-content-center align-items-center">
                <div className="d-block d-lg-none gallery-mobile">
                    <TitleH2 className="title title-mobile">
                        O que dizem sobre <br /> meu trabalho
                    </TitleH2>

                </div>
                <div className="d-none d-lg-block gallery-desktop">
                    <div className="div-faixa"> </div>
                    <TitleH2 className="title title-desktop">
                        O que dizem sobre <br /> meu trabalho
                    </TitleH2>

                    <div className="feedback-container d-flex">
                        <div className="gallery-content p-4">
                            {/* <GalleryDesktop /> */}
                            <ImageMosaic 
                                images={[
                                    "/gallery/feedback1.jpeg",
                                    "/gallery/feedback2.jpeg",
                                    "/gallery/feedback3.jpeg",
                                    "/gallery/feedback4.jpeg"
                                ]}
                            />
                        </div>
                        <div className="div-palette">
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
