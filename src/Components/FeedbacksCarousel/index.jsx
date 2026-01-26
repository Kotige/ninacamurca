import { useState } from "react";
import { ChevronRight } from "lucide-react";
import images from "../../Data/feedbacksCarouselData";

export default function FeedbacksCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    function nextImage() {
        setActiveIndex((prev) =>
            prev === images.length -1 ? 0 : prev + 1
        );
    }

    return (
        <section className="w-full h-[100vh] relative flex items-center justify-center pt-4">
            {/* Images Container  */}
            <div className="w-full h-full  flex items-center justify-center">
                {/* Active Image  */}
                <div className="h-full max-h-[90vw] aspect-[3/4] overflow-hidden">
                    <img 
                        src={images[activeIndex]} 
                        alt={`Imagem ${activeIndex + 1}`}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Controle  */}
            <button onClick={nextImage}
                className="absolute top-1/2 -right-12 -translate-y-1/2 h-14 w-14 flex items-center justify-center"
            >
                <ChevronRight size={48} />
            </button>
        </section>
    );
}