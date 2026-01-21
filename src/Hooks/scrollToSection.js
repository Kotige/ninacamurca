import * as bootstrap from "bootstrap";

export function scrollToSection(id) {
    const section = document.getElementById(id);
    if (!section) return;

    // Smooth scroll
    section.scrollIntoView({ behavior: "smooth" });

    // No hash
    window.history.replaceState(null, "", window.location.pathname);

    // Navbar collapse for mobile
    const navbar = document.getElementById("navbarSupportedContent");

    if (navbar && navbar.classList.contains("show")) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbar) 
            || new bootstrap.Collapse(navbar, { toggle: false });

        bsCollapse.hide();
    }
}
