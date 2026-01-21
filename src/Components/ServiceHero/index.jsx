import "./styles.scss"

export default function ServiceHero({description, image, imageAlt}){
    return (
        <section className="container-fluid" id="service-hero">
            <div className="row align-items-center">
                <div className="col-md-6 px-5">
                    {description}
                </div>
                <div className="col-md-6 text-center">
                    <img 
                    src={image} 
                    alt={imageAlt}
                    className="img-fluid" />
                </div>
            </div>
        </section>
    )
}