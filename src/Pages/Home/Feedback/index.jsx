import "./styles.scss"
import FeedbacksCarousel from "../../../Components/FeedbacksCarousel"
import feedbacks from "../../../assets/images/feedbacks/feed-desktop.png";
import palette from "../../../assets/images/feedbacks/rpalette.png";

export default function Feedbacks() {
    return (
        <section id="feedbacks" className="relative z-10 w-full  lg:mt-0 py-26 overflow-hidden">
            <div id="feedbacks-mobile" className="md:hidden border mx-16 py-8 block ">
                <h2 className="text-3xl text-center">
                    O que dizem sobre  <br /> meu trabalho
                </h2>
                <FeedbacksCarousel />
            </div>

            <div id="feedbacks-desktop" className="hidden md:block">
                <h2 className="text-3xl ms-40 mt-12">
                    O que dizem sobre <br /> meu trabalho
                </h2>

                <div className="flex justify-center mt-4">
                    <div id="feedbacks-desktop" className="relative z-10 border w-[80vw] h-[70vh] overflow-hidden p-2">
                        <img 
                            src={feedbacks} 
                            alt="imagens de feedbacks" 
                            className="w-[95%] h-[100%] z-10"
                        />
                        <img 
                            src={palette} 
                            alt="imagens de feedbacks" 
                            className="absolute z-0 right-0 top-0 w-[5%] h-[100%]"
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}