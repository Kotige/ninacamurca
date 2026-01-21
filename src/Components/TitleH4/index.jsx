
import "./styles.scss"

export default function TitleH4({ children, className = "" }) {
    return (
        <h4 className={` ${className}`}>
            {children}
        </h4>
    );
}
