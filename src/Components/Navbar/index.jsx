import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";


export default function Navbar() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { label: "Home", href: "#home" },
        { label: "Quem Sou", href: "#about" },
        { label: "Serviços", href: "#services" },
        { label: "Feedbacks", href: "#feedbacks" },
        { label: "Contato", href: "#contact" },
    ];

    function handleAnchorClick(href) {
        setOpen(false);

        if (location.pathname !== "/") {
        window.location.href = `/${href}`;
        return;
        }

        const target = document.querySelector(href);
        if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <header className="fixed top-0 left-0 w-full z-50">
        <nav className="relative flex items-center px-4 py-4 md:px-10 justify-end md:justify-center">
            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-8 text-sm font-normal text-[#5A4A3B]">
            {navLinks.map((link) => (
                <li key={link.label}>
                <button
                    onClick={() => handleAnchorClick(link.href)}
                    className="hover:text-[#A67152] transition-colors hover:cursor-pointer"
                >
                    {link.label}
                </button>
                </li>
            ))}
            </ul>

            {/* Mobile Button */}
            <button
            onClick={() => setOpen(true)}
            className="flex justify-end md:hidden text-[#5A4A3B]"
            aria-label="Abrir menu"
            >
            <Menu size={26} />
            </button>
        </nav>

        {/* Overlay */}
        <div
            className={`fixed inset-0 backdrop-blur-sm transition-opacity duration-300
            ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            onClick={() => setOpen(false)}
        />

        {/* Mobile Menu */}
        <aside
            className={`fixed top-0 right-0 h-full w-72
            bg-white/30 backdrop-blur-xl border-l border-white/40
            transform transition-transform duration-300 ease-out
            ${open ? "translate-x-0" : "translate-x-full"}`}
        >
            <div className="flex items-center justify-between px-5 py-4">

            <button
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
                className="text-[#5A4A3B] fixed top-4 right-5"
            >
                <X size={26} />
            </button>
            </div>

            <ul className="flex flex-col gap-6 px-6 mt-8 text-[#25241F] font-normal">
            {navLinks.map((link) => (
                <li key={link.label}>
                <button
                    onClick={() => handleAnchorClick(link.href)}
                    className="w-full text-left text-lg hover:text-[#A67152] transition-colors"
                >
                    {link.label}
                </button>
                </li>
            ))}
            </ul>
        </aside>
        </header>
    );
    }
