import modv from "../../assets/images/modv.png";

import "./styles.scss";

export default function Footer() {
    return (
        <footer className="" id="footer">
        <div className="text-center">
            <div>
                <a href="https://modvestudio.com.br/" target='_blank'>
                    <img 
                        src={modv}
                        alt="modv estúdio"
                        id="modv-logo"
                        className="mb-3"
                    />
                </a>
            </div>
            <div className="footer-text">
                <small> © {new Date().getFullYear()} modv estúdio. Todos os direitos reservados.</small>
            </div>
        </div>
        </footer>
    )
}