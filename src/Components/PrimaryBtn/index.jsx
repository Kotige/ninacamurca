import "./styles.scss";

export default function PrimaryBtn ({ children, onClick, href, target, className }) {
  // Se tiver "href", renderiza como <a>
    if (href) {
        return (
            <a
                className={`btn btn-primary ${className || ""}`}
                href={href}
                target={target || "_blank"}
                rel="noopener noreferrer"
            >
                {children}
            </a>
        );
    }

  // Caso contrário, renderiza como <button>
    return (
        <button 
            className={`btn btn-primary ${className || ""}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
