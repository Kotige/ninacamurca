import { scrollToSection } from "../../Hooks/scrollToSection";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles.scss";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg" id="navbar">
            <div className="container">
                {/* <a className="navbar-brand fw-bold" href="#home">Artista</a> */}

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3 w-100 d-flex justify-content-center">

                        <li className="nav-item">
                            <button className="nav-link" onClick={() => scrollToSection("home")}>
                                Home
                            </button>
                        </li>

                        <li className="nav-item">
                            <button className="nav-link" onClick={() => scrollToSection("aboutme")}>
                                Quem Sou
                            </button>
                        </li>

                        <li className="nav-item">
                            <button className="nav-link" onClick={() => scrollToSection("jobs")}>
                                Serviços
                            </button>
                        </li>

                        <li className="nav-item">
                            <button className="nav-link" onClick={() => scrollToSection("feedbacks")}>
                                Feedbacks
                            </button>
                        </li>

                        <li className="nav-item">
                            <button className="nav-link" onClick={() => scrollToSection("contact")}>
                                Contato
                            </button>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}
