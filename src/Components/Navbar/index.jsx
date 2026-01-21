import { useState } from "react";
import { scrollToSection } from "../../Hooks/scrollToSection";
import "./styles.scss";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    const handleLinkClick = (section) => {
        scrollToSection(section);
        setIsOpen(false);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark" id="navbar">
            <div className="container">

                {/* BOTÃO HAMBURGUER */}
                <button
                    type="button"
                    className="navbar-toggler"
                    onClick={toggleMenu}
                    aria-expanded={isOpen}
                    //aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* MENU */}
                <div className={`navbar-collapse navbar-collapse-animated ${isOpen ? "show" : ""}`}>
                    <ul className="navbar-nav ms-auto gap-3 w-100 justify-content-center">

                        <li className="nav-item">
                            <button className="nav-link" onClick={() => handleLinkClick("home")}>
                                Home
                            </button>
                        </li>

                        <li className="nav-item">
                            <button className="nav-link" onClick={() => handleLinkClick("aboutme")}>
                                Quem Sou
                            </button>
                        </li>

                        <li className="nav-item">
                            <button className="nav-link" onClick={() => handleLinkClick("jobs")}>
                                Serviços
                            </button>
                        </li>

                        <li className="nav-item">
                            <button className="nav-link" onClick={() => handleLinkClick("feedbacks")}>
                                Feedbacks
                            </button>
                        </li>

                        <li className="nav-item">
                            <button className="nav-link" onClick={() => handleLinkClick("contact")}>
                                Contato
                            </button>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}
