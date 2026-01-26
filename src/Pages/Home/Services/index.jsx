import ServicesCarousel from "../../../Components/ServicesCarousel"

export default function Services() {
    return (
        <section id="services"
            className="w-full pb-18 md:py-16 px-6 md:px-40  bg-[#25241F]"
        >
            <div>
                <h2 className="text-3xl md:text-3xl font-normal text-center lg:text-left mb-12">
                    O que eu faço
                </h2>
            </div>
            <ServicesCarousel />
        </section>
    )
}