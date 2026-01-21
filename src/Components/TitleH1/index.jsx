import "./styles.scss"

export default function TitleH1({ children, className = "" }) {
    return (
        <h1 className={` ${className}`}>
            {children}
        </h1>
    );
}
