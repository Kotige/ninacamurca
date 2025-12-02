import TitleH2 from "../../../Components/TitleH2";
import Paragraph from "../../../Components/Paragraph"
import "./styles.scss"

export default function AboutMe() {
    return (
        <>
            <section id="aboutme" className="row align-items-center justify-content-center justify-content-lg-between">
                <div className="about-text col-12 col-lg-4">
                    <TitleH2 className="about-title">
                        Sobre mim
                    </TitleH2>
                    <Paragraph>
                        Sou <b>Nina Camurça</b>, formada em Comunicação Social pela Universidade Federal
                        de Juiz de Fora, e atuo há mais de cinco anos no mercado <b>audiovisual</b> e de 
                        <b> marketing digital</b>. Durante minha formação, participei de diversas produções
                        de curta, projetos de criação audiovisual e <b>coberturas de eventos</b>, além de
                        trabalhar com clientes de diferentes segmentos.
                    </Paragraph>
                    <Paragraph>
                        Com o tempo, ampliei meu repertório e hoje ofereço um conjunto completo de serviços que
                        unem criatividade e estratégia: <b>fotografia</b>, <b>videografia</b>,  
                        <b> produção de conteúdo</b>, <b>gestão de marketing e gerenciamento de tráfego
                        pago</b>. Meu propósito é dar forma e visibilidade a ideias, criando materiais que
                        conectam marcas ao seu público com <b>autenticidade e impacto</b>.
                    </Paragraph>
                </div>
                <div className="col-12 col-lg-7">
                    <img 
                        src="https://picsum.photos/350/200"
                        alt="placeholder" 
                        className="about-img"
                    />
                </div>
            </section>
        </>
    )
}
