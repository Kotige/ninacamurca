import React from "react";
import "./styles.scss";

import feed1 from "../../assets/images/feed1.png";
import feed2 from "../../assets/images/feed2.png";
import feed3 from "../../assets/images/feed3.png";
import feed4 from "../../assets/images/feed4.png";
import feed5 from "../../assets/images/feed5.png";

export default function FeedCarousel() {
    const images = [
        {id: 1, src: feed1, alt: "Feedback"},
        {id: 2, src: feed2, alt: "Feedback"},
        {id: 3, src: feed3, alt: "Feedback"},
        {id: 4, src: feed4, alt: "Feedback"},
        {id: 5, src: feed5, alt: "Feedback"},
    ];

    return (
        <div id="feedCarousel"
            className="carousel slide carousel-fade"
        >
            {/* Slide  */}
            <div className="carousel-inner">
                {images.map((img, index) => (
                    <div
                        key={img.id}
                        className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                        <img src={img.src} alt={img.alt}
                            className=" img-fluid"
                            style={{
                                
                                objectFit: "cover",
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* Botão Anterior  */}
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#feedCarousel"
                data-bs-slide="prev"
            >
                <svg width="52" height="52" fill="#A67152" viewBox="0 0 24 24">
                    <path d="M15 18l-6-6 6-6" />
                </svg>
                <span className="visually-hidden"> Anterior </span>
            </button>

            {/* Botão Próximo  */}
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#feedCarousel"
                data-bs-slide="next"
            >
                <svg width="52" height="52" fill="#A67152" viewBox="0 0 24 24">
                    <path d="M9 6l6 6-6 6" />
                </svg>
                <span className="visually-hidden"> Próximo </span>
            </button>
        </div>
    );
}