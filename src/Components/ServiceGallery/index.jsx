import { useState, useRef } from "react";

import "./styles.scss";

export default function ServiceGallery({gallery}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentMedia = gallery.media[currentIndex];

    function nextMedia() {
        setCurrentIndex((prev) =>
            prev === gallery.media.length -1 ? 0 : prev + 1
        );
    }

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    function togglePlay() {
        const video = videoRef.current;
        if (!video) return;

        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    }

    return (
        <section className="container service-gallery p-0">
            <div className="row">
                {/* Legenda e Controles  */}
                <div className="col-md-8 order-1 order-md-2 text-block">
                    <div>
                        <h3>{gallery.title}</h3>
                        <p>{gallery.description}</p>
                    </div>
                    <button className="gallery-next"
                        onClick={nextMedia}
                        aria-label="Próximo"
                    >
                        →
                    </button>
                </div>
                {/* Mídia  */}
                <div className="col-md-4 order-2 order-md-1 media">
                    {currentMedia.type === "image" && (
                        <img src={currentMedia.src} 
                            alt=""
                            className="image" 
                        />
                    )}

                    {currentMedia.type === "video" && (
                        <div className="video-wrapper">
                            <video 
                                src={currentMedia.src}
                                className="video"
                                ref={videoRef}
                                playsInline
                            />

                            <button className="video-control"
                                onClick={togglePlay}
                                aria-label="Play/Pause"
                            >
                                {isPlaying ? "❚❚" : "▶"}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}