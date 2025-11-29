export default function BootstrapIcon({ name, size = 20, className = "", color }) {
    return <i className={`bi bi-${name} ${className}`} ></i>;
}
