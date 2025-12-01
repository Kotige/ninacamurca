import "./styles.scss"

export default function TitleH1({ children, className = "" }) {
    return (
        <h1 className={`fw-bold text-center ${className}`}>
            {children}
        </h1>
    );
}
