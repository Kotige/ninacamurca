export default function TitleH2({ children, className = "" }) {
    return (
        <h2 className={`fw-bold text-center ${className}`}>
            {children}
        </h2>
    );
}
