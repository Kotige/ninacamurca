import { useRef, useState, useEffect } from "react";
import BootstrapIcon from "../../Components/BootstrapIcon"; 
import "./styles.scss";

export default function GalleryMobile({ images }) {
    
    const containerRef = useRef(null);
    const [itemsPerView, setItemsPerView] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const update = () => {
            if (!containerRef.current) return;
            const width = containerRef.current.offsetWidth;

            const itemMinWidth = 240;
            const possibleItems = Math.floor(width / itemMinWidth);

            setItemsPerView(Math.max(1, possibleItems));
        };

        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const maxIndex = Math.max(0, images.length - itemsPerView);

    const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
    const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

    return (
        <div className="gallery-mobile-carousel" ref={containerRef}>
            
            <button className="nav-btn left" onClick={prev} disabled={currentIndex === 0}>
                <BootstrapIcon name="chevron-left" size={34} />
            </button>

            <div className="viewport">
                <div
                    className="track"
                    style={{
                        transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                    }}
                >
                    {images.map((img, i) => (
                        <div
                            className="item"
                            key={i}
                            style={{
                                width: `${100 / itemsPerView}%`,
                            }}
                        >
                            <img src={img} alt={`feedback ${i}`} />
                        </div>
                    ))}
                </div>
            </div>

            <button className="nav-btn right" onClick={next} disabled={currentIndex === maxIndex}>
                <BootstrapIcon name="chevron-right" size={34} />
            </button>
        </div>
    );
}
