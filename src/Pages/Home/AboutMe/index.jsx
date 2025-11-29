import TitleH2 from "../../../Components/TitleH2";
import Paragraph from "../../../Components/Paragraph"

export default function AboutMe() {
    return (
        <>
            <section id="aboutme" className="d-flex justify-content-around">
                <div>
                    <TitleH2>
                        Sobre mim
                    </TitleH2>
                    <Paragraph>
                        Sou <b>Nina Camurça</b>, formada em Comunicação Social pela Universidade Federal
                        de Juiz de Fora, e atuo há mais de cinco anos no mercado <span>audiovisual</span> e de
                        <span>marketing digital</span>. Durante minha formação, participei de diversas produções
                        de curta, projetos de criação audiovisual e <span>coberturas de eventos</span>, além de
                        trabalhar com clientes de diferentes segmentos.
                    </Paragraph>
                    <Paragraph>
                        Com o tempo, ampliei meu repertório e hoje ofereço um conjunto completo de serviços que
                        unem criatividade e estratégia: <span>fotografia</span>, <span>videografia</span>, 
                        <span>produção de conteúdo</span>, <span>gestão de marketing e gerenciamento de tráfego
                        pago</span>. Meu propósito é dar forma e visibilidade a ideias, criando materiais que
                        conectam marcas ao seu público com <span>autenticidade e impacto</span>.
                    </Paragraph>
                </div>
                <div>
                    <img 
                        src="https://picsum.photos/500/300"
                        alt="placeholder" />
                </div>
            </section>
        </>
    )
}
