import { useState } from "react";

import "./styles.scss";

export default function ServiceGallery({gallery}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentMedia = gallery.media[currentIndex];

    function nextMedia() {
        setCurrentIndex((prev) =>
            prev === gallery.media.length -1 ? 0 : prev + 1
        );
    }

    return (
        <section className="container service-gallery p-0">
            <div className="row align-items-top p-0">
                {/* Mídia  */}
                <div className="col-md-6 mb-4 mb-md-0 p-0">
                    {currentMedia.type === "image" && (
                        <img src={currentMedia.src} 
                            alt=""
                            className="image p-0" 
                        />
                    )}

                    {currentMedia.type === "video" && (
                        <video 
                            src={currentMedia.src}
                            className="video p-0"
                            coltrols
                        />
                    )}
                </div>

                {/* Legenda e controle  */}
                <div className="col-md-6">
                    <div className="justify-content-center align-items-center">
                        <div className="">
                            <h3>{gallery.title}</h3>
                            <p className="text-center text-md-start p-0">{gallery.description}</p>
                        </div>

                        <div className="">
                            <button className="gallery-next"
                                onClick={nextMedia}
                                aria-label="Próximo"
                            >
                                →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}