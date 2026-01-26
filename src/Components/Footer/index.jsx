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
                        className="w-[35%] md:w-[20%]"
                        loading="lazy"
                        aria-label="Site da modv estúdio" 
                    />
                
                </a>
                <p className="text-sm text-center mb-6 md:mb-0"> 
                    © 2025 <a href="https://modvestudio.com.br/" target="_blank" rel="noopener noreferrer">modv estúdio</a>. <br className="block md:hidden" /> Todos os direitos reservados.
                </p>
            </div>
        </footer>
    )
}