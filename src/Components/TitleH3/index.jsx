export default function TitleH3({ children, className = "" }) {
    return (
        <h3 className={`fw-bold text-center ${className}`}>
            {children}
        </h3>
    );
}
