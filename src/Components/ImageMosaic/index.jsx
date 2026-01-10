import React from "react";
import "./styles.scss";


export default function ImageMosaic({ images, height = "400px", gap = "8px" }) {
    return (
        <div
            className="image-mosaic container-fluid"
            style={{ height, "--gap": gap }}
        >
            <div className="row h-100 g-0">

                {/* COLUNA ESQUERDA – col-4 */}
                <div className="col-4 h-100 p-gap">
                    <div className="img-box h-100">
                        <img src={images[0]} alt="" />
                    </div>
                </div>

                {/* COLUNA DIREITA – col-8 */}
                <div className="col-8 h-100 d-flex flex-column">

                    {/* LINHA SUPERIOR – 40% */}
                    <div className="row flex-grow-0" style={{ height: "40%" }}>
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="col-4 p-gap">
                                <div className="img-box h-100">
                                    <img src={images[i]} alt="" />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* LINHA INFERIOR – 60% */}
                    <div className="row flex-grow-1" style={{ height: "60%" }}>

                        {/* COLUNA INFERIOR ESQUERDA */}
                        <div className="col-6 h-100 d-flex flex-column">

                            {/* 60% – duas imagens */}
                            <div className="row" style={{ height: "60%" }}>
                                {[4, 5].map((i) => (
                                    <div key={i} className="col-6 p-gap">
                                        <div className="img-box h-100">
                                            <img src={images[i]} alt="" />
                                        </div>
                                    </div>
                                ))}
                            </div>

              {/* 40% – uma imagem */}
              <div className="p-gap" style={{ height: "40%" }}>
                <div className="img-box h-100">
                  <img src={images[6]} alt="" />
                </div>
              </div>
            </div>

            {/* COLUNA INFERIOR DIREITA */}
            <div className="col-6 h-100 d-flex flex-column">

              {/* 40% – duas imagens */}
              <div className="row" style={{ height: "40%" }}>
                {[7, 8].map((i) => (
                  <div key={i} className="col-6 p-gap">
                    <div className="img-box h-100">
                      <img src={images[i]} alt="" />
                    </div>
                  </div>
                ))}
              </div>

              {/* 60% – uma imagem */}
              <div className="p-gap" style={{ height: "60%" }}>
                <div className="img-box h-100">
                  <img src={images[9]} alt="" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
