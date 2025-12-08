import TitleH2 from "../../../Components/TitleH2";
import Carousel from "../../../Components/Carousel";
import "./styles.scss";

export default function Jobs() {
    return (
        <>
            <section id="jobs" className="d-flex justify-content-center row">
                <div className="col-12 jobs-title">
                    <TitleH2>
                        O que eu faço
                    </TitleH2>
                </div>
                <div className="col-12">
                    <Carousel />
                </div>
            </section>
        </>
    )
}
