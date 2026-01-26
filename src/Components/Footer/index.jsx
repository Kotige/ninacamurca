import modv from "../../assets/images/footer/modv.png"

import "./styles.scss"

export default function Footer() {
    return (
        <footer id="footer" className="pt-24 pb-5 md:pt-32 md:pb-10">
            <div className="flex flex-col items-center justify-center">
                <a 
                    href="https://modvestudio.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center mb-3"
                >
                    <img 
                        src={modv}
                        alt="modv estúdio"
                        className="w-[25%] md:w-[15%]"
                        loading="lazy"
                        aria-label="Site da modv estúdio" 
                    />
                
                </a>
                <p className="text-sm"> 
                    © 2025 <a href="https://modvestudio.com.br/" target="_blank" rel="noopener noreferrer">modv estúdio</a>. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    )
}