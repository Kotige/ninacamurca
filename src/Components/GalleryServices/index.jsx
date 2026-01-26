import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function GalleryServices({ gallery }) {
    if (!gallery) return null;

    const { title, description, media } = gallery;
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const activeItem = media[activeIndex];

    const isPhoto = activeItem.type === "image";

    function handleNext() {
        if (isAnimating) return;

        setIsAnimating(true);

        setTimeout(() => {
            setActiveIndex((prev) =>
                prev === media.length - 1 ? 0 : prev + 1
            );
        }, 200);

        setTimeout(() => {
            setIsAnimating(false);
        }, 500);
    }

    return (
        <section
            className="
                grid grid-cols-1
                md:grid-cols-12
                gap-12
                items-center
                bg-[#25241F]
                mx-auto
                w-full
                max-w-[900px]
                h-[100vh]
                md:h-[420px]
                rounded-t-[44px]
                md:rounded-r-[55px]
            "
        >
            {/* Texto + seta */}
            <div
                className={`
                    order-1 md:order-2
                    ${isPhoto ? "md:col-span-6" : "md:col-span-8"}
                    flex flex-col md:flex-row
                    items-center
                    justify-center md:justify-between
                    h-full
                    gap-0 md:gap-0
                    text-center
                    pt-4
                `}
            >
                <div className="md:ml-12 max-w-[80%] py-4 md:text-left">
                    <h2 className="text-xl font-semibold mb-4 text-[#A67152]">
                        {title}
                    </h2>
                    <p className="leading-relaxed text-[#F2E6D8]">
                        {description}
                    </p>
                </div>

                <button
                    onClick={handleNext}
                    className="flex items-center justify-center"
                    aria-label="Próximo item da galeria"
                >
                    <ChevronRight
                        size={42}
                        className="opacity-60 text-[#A67152]"
                    />
                </button>
            </div>

            {/* Mídia */}
            <div
                className={`
                    order-2 md:order-1
                    ${isPhoto ? "md:col-span-6" : "md:col-span-4"}
                    w-full h-full
                    overflow-hidden
                `}
            >
                <div
                    className={`
                        w-full h-full
                        transition-opacity duration-500 ease-in-out
                        ${isAnimating ? "opacity-0" : "opacity-100"}
                    `}
                >
                    {activeItem.type === "video" ? (
                        <video
                            src={activeItem.src}
                            controls
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <img
                            src={activeItem.src}
                            alt={activeItem.alt || ""}
                            className="w-full h-full object-cover"
                        />
                    )}
                </div>
            </div>
        </section>
    );
}
