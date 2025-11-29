export function scrollToSection() {
    const scrollToSectionId = (id) => {
        const section = document.getElementById(id);
        if (!section) return;

        section.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState(null, '', window.location.pathname);
    };

    return { scrollToSectionId };
}
