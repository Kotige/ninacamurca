import "./styles.scss"

export default function ServiceTitle({title}) {
    return (
        <section className="d-flex justify-content-center justify-content-md-start ms-md-5 py-5 service-title-container">
            <h1 className="service-title">{title}</h1>
        </section>
    )
}