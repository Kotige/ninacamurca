export default function TitleH2({ children, className = "" }) {
    return (
        <h2 className={`text-center text-lg-start ${className}`}>
            {children}
        </h2>
    );
}
