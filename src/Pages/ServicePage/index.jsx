import { useParams } from "react-router-dom";
import { getServiceBySlug } from "../../Data/servicesData/index";

import ServiceTitle from "../../Components/ServiceTitle";
import ServiceHero from "../../Components/ServiceHero";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Contact from "../Home/Contact";
import GalleryServices from "../../Components/GalleryServices";

import palette from "../../assets/images/about/palette.png";

import "./styles.scss";

export default function ServicePage() {
    const { slug } = useParams();
    const service = getServiceBySlug(slug);

    if (!service) {
        return (
            <div className="py-20 text-center">
                <h2 className="text-2xl font-semibold">
                    Serviço não encontrado
                </h2>
                <p className="mt-2">
                    O serviço que você procura não existe.
                </p>
            </div>
        );
    }

    return (
        <main id="service-page" className="overflow-hidden">
            <div className="z-10">
                <Navbar />
                <ServiceTitle title={service.title} />

                <ServiceHero 
                    description={service.description}
                    image={service.heroImage}
                    imageAlt={service.title}
                />
                <div id="gallery-bg" className="px-4 pb-26 md:pb-16 mb-28">
                    <GalleryServices gallery={service.gallery} />
                </div>
                <Contact />
                <Footer />
            </div>
            <div>
                <img src={palette} alt="paleta decorativa" className="hidden -z-1 w-[1%] md:block absolute top-1/2" />
            </div>
        </main>
    )
}