import { useParams } from "react-router-dom";
import { services } from "../../data/services.jsx";

import ServiceTitle from "../../Components/ServiceTitle";
import ServiceHero from "../../Components/ServiceHero";
import ServiceGallery from "../../Components/ServiceGallery";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Contact from "../Home/Contact";

import "./styles.scss";

export default function ServicePage() {
    const { slug } = useParams();

    const service = services.find(
        (item) => item.slug === slug
    );

    if (!service) {
        return (
            <div className="container py-5">
                <h2>Serviço não encontrado</h2>
                <p>O serviço que você procura não existe.</p>
            </div>
        );
    }

    return (
        <main id="service-pages">
            <Navbar />
            <ServiceTitle title={service.title} />
            <ServiceHero 
                description={service.description}
                image={service.heroImage}
                imageAlt={service.title}
            />

            <div className="d-flex justify-content-center">
                <div id="gallery-container">
                    <ServiceGallery gallery={service.gallery} />
                </div>
            </div>

            <Contact />
            <Footer />
        </main>
    );
}