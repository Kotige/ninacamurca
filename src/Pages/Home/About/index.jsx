import ninaAbout from "../../../assets/images/about/1.jpg";
import palette from "../../../assets/images/about/palette.png";

export default function About() {
    return (
        <section id="about"
            className="relative w-full mt-16 lg:mt-0 py-16 bg-[#25241F]"
        >
            <div className="mx-0 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center z-10">
                <div className="px-22 md:px-16 lg:px-8 lg:ms-32">
                    <h2 className="text-3xl text-center md:text-start font-normal mb-4">
                        Sobre Mim
                    </h2>

                    <p className="text-base md:text-base text-[#F2E6D8] leading-relaxed text-center md:text-justify">
                        Sou <b>Nina Camurça</b>, formada em Comunicação Social pela Universidade Federal
                        de Juiz de Fora, e atuo há mais de cinco anos no mercado <b>audiovisual</b> e de 
                        <b> marketing digital</b>. Durante minha formação, participei de diversas produções
                        de curta, projetos de criação audiovisual e <b>coberturas de eventos</b>, além de
                        trabalhar com clientes de diferentes segmentos.
                    </p>
                    <p className="text-base md:text-base text-[#F2E6D8] leading-relaxed text-center md:text-justify mt-2">
                        Com o tempo, ampliei meu repertório e hoje ofereço um conjunto completo de serviços que
                        unem criatividade e estratégia: <b>fotografia</b>, <b>videografia</b>,  
                        <b> produção de conteúdo</b>, <b>gestão de marketing e gerenciamento de tráfego
                        pago</b>. Meu propósito é dar forma e visibilidade a ideias, criando materiais que
                        conectam marcas ao seu público com <b>autenticidade e impacto</b>.
                    </p>
                </div>

                <div className="w-full">
                    <img 
                        src={ninaAbout} 
                        alt="Nina Camurça" 
                        className="w-full h-auto object-cover" 
                    />

                </div>
            </div>
            <div className="absolute -top-29 left-0 z-0 hidden lg:block">
                <img 
                    className="h-[130vh]"
                    src={palette} 
                    alt="paleta de cores decorativa" />
            </div>
        </section>
    )
}