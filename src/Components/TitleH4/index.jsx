export default function TitleH4({ children, className = "" }) {
    return (
        <h4 className={`fw-bold text-center ${className}`}>
            {children}
        </h4>
    );
}
