import { useRef } from "react";

import useMasonry from "../../Hooks/useMasonry";
import galleryData from "../../data/galleryData.json";

import "./styles.scss"

export default function Gallery() {
  const galleryRef = useRef(null);

  useMasonry(galleryRef, 15, 1);

  return (
    <div className="gallery" ref={galleryRef}>
      {galleryData.map(image => (
        <a className="gallery__link" key={image.id}>
          <figure className="gallery__thumb">
            <img
              src={image.src}
              alt={image.alt}
              className="gallery__image"
              loading="lazy"
            />
          </figure>
        </a>
      ))}
    </div>
  );
}