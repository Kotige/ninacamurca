import TitleH2 from "../../../Components/TitleH2";
import Paragraph from "../../../Components/Paragraph"
import ninaFoto from "../../../assets/images/nina-foto.JPG";
import palette from "../../../assets/images/palette.png"
import "./styles.scss"

export default function AboutMe() {
    return (
        <>
            <section id="aboutme" className="row align-items-center justify-content-center">
                <div className="about-text col-12 col-lg-6">
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
                <div className="about-img-div col-12 col-lg-6 d-flex justify-content-lg-end bg-warning">
                    <img 
                        src={ninaFoto}
                        alt="Nina Camurça segurando uma câmera fotográfica em frente ao rosto." 
                        className="about-img"
                    />
                </div>
            </section>
            <div>
                <img 
                    src={palette} 
                    className="palette d-none d-lg-block"
                    alt="Detalhe fixo do canto esquerdo em telas grandes" 
                />
            </div>
        </>
    )
}
