import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import services from "../../Data/serviceCarouselData";

import "./styles.scss";

export default function ServicesCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const navigate = useNavigate();

    const activeItem = services[activeIndex];
    const secondItem = services[(activeIndex + 1) % services.length];
    
    function nextItem() {
        setActiveIndex((prev) =>
            prev === services.length -1 ? 0 : prev + 1
        );
    }

    function handleNavigate(slug) {
        navigate(`/servicos/${slug}`);
        window.scrollTo(
            {
                top: 0,
                behavior: "smooth",
            }
        )
    }

    return (
        <>
            {/* Layout para Mobile  */}
            <section className="lg:hidden w-full px-4">
                {/* Título ativo  */}
                <div className="grid justify-center text-center">
                    <div className="inline-block text-[#F2E6D8]">
                        <h3 className="text-xl text-center mb-4 bg-[#5A4A3B] inline-block px-4 rounded-r-[10px]">
                        {activeItem.title}
                    </h3>
                    <p className="md:mx-24 mb-3 text-sm">
                        {activeItem.description}
                    </p>
                    </div>
                </div>

                {/* Imagem */}
                <div className="relative w-full mb-6">
                    <button
                        onClick={() => handleNavigate(activeItem.slug)}
                        className="mx-auto block w-full max-w-sm"
                    >
                        <div className="aspect-square overflow-hidden rounded-r-[55px]">
                            <img 
                                src={activeItem.image} 
                                alt={activeItem.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </button>

                    <button
                        onClick={nextItem}
                        className="absolute top-1/2 -right-10 -translate-y-1/2 h-12 w-12 flex items-center justify-center"
                    >
                        <ChevronRight size={46}/>
                    </button>
                </div>

                {/* Lista de Títulos */}
                <div className="flex justify-center">
                    <ul className="flex flex-wrap justify-center gap-2">
                        {services.map((item, index) => (
                            <li key={item.slug}>
                                <button
                                    onClick={() => setActiveIndex(index)}
                                    className={"text-xs bg-[#5A4A3B] text-[#F2E6D8] px-3 py-1 rounded-r-[8px]"}
                                >
                                    {item.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            {/* Layout para Desktop  */}
            <section className="hidden lg:block w-full max-w-4xl mx-auto pt-4 px-6 relative">
                <div className="grid grid-cols-2 gap-10 items-start">
                    {[activeItem, secondItem].map((item) => (
                        <div key={item.slug}
                            className="flex flex-col items-center text-center"
                        >
                            <h3 className="text-xl bg-[#5A4A3B] text-[#F2E6D8] px-6 py-1 rounded-r-[13px]">
                                {item.title}
                            </h3>

                            <p className="my-5  text-[#F2E6D8] text-xs mx-8">
                                {item.description}
                            </p>

                            <button
                                onClick={() => handleNavigate(item.slug)}
                                className="w-full max-w-[25vw]"
                            >
                                <div className="aspect-square overflow-hidden rounded-r-[55px]">
                                    <img 
                                        src={item.image} 
                                        alt={item.title}
                                        className="w-full h-full object-cover transition transform duration-300 hover:scale-105 cursor-pointer" 
                                    />
                                </div>
                            </button>
                        </div>
                    ))}
                </div>
                {/* Navegação */}
                <div className="flex justify-end mt-6">
                    <button
                        onClick={nextItem}
                        className="absolute top-1/2 -right-4 -translate-y-1/2 h-14 w-14 flex items-center justify-center cursor-pointer"
                    >
                        <ChevronRight size={46} />
                    </button>
                </div>
                {/* Lista de Títulos */}
                <div className="flex justify-center">
                    <ul className="flex flex-wrap justify-center gap-4 mx-30">
                        {services.map((item, index) => (
                            <li key={item.slug}>
                                <button
                                    onClick={() => setActiveIndex(index)}
                                    className={"text-sm bg-[#5A4A3B] text-[#F2E6D8] px-3 py-1 rounded-r-[10px] cursor-pointer"}
                                >
                                    {item.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
}