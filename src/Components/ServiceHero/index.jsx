export default function ServiceHero({description, image, imageAlt}) {
    return (
        <section className="mt-16 mb-16 md:mb-36 w-full overflow-hidden bg-[#25241F] text-[#F2E6D8]">
            <div className="mx-auto mx-w-7xl grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                {/* Texto */}
                <div className="pt-8 px-8 md:pl-40 md:pr-12 text-center md:text-left">
                    <p className="leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Imagem */}
                <div className="flex justify-center">
                    <img 
                        src={image} 
                        alt={imageAlt} 
                        className="w-full  h-auto"
                    />
                </div>
            </div>
        </section>
    );
}