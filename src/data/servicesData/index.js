import aftermovie from "./aftermovie";
import produtos from "./produtos";
import reels from "./reels";
import socialMedia from "./socialMedia";
import trafego from "./trafego";
import cobertura from "./cobertura";
import ads from "./ads";

export const services = [
    aftermovie,
    produtos,
    reels,
    socialMedia,
    trafego,
    cobertura,
    ads,
];

export function getServiceBySlug(slug) {
    return services.find(service => service.slug === slug);
}