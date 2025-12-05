import "./styles.scss";

export default function Footer() {
    return (
        <footer className="" id="footer">
        <div className="text-center">
            <div>
                <a href="https://modvestudio.com.br/" target='_blank'>
                    <img 
                        src="https://picsum.photos/50/30" 
                        alt="placeholder" 
                        className='modv'
                    />
                </a>
            </div>
            <div>
                <small> © {new Date().getFullYear()}. Todos os direitos reservados.</small>
            </div>
        </div>
        </footer>
    )
}