
import "./styles.scss"

export default function TitleH5({ children, className = "" }) {
    return (
        <h5 className={` ${className}`}>
            {children}
        </h5>
    );
}
