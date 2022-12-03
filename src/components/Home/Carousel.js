import convocatoria from "../../assets/img/convocatoria.png"
import imagen1 from "../../assets/img/guaso.jpg"
import imagen3 from "../../assets/img/fundamentalista.jpg"
import imagen22 from "../../assets/img/cruzando2.jpg"
import estudios from "../../assets/img/estudios.jpg"

const Carousel = () => {
    return (
        <section className="page-section" id="carousel">
            <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div
                            className="portfolio-item mx-auto"
                            data-bs-toggle="modal"
                            data-bs-target="#"
                        >
                            <img
                                className="img-carousel"
                                src={convocatoria}
                                alt="..."
                            />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div
                            className="portfolio-item mx-auto"
                            data-bs-toggle="modal"
                            data-bs-target="#"
                        >
                            <img
                                className="img-carousel"
                                src={estudios}
                                alt="..."
                            />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div
                            className="portfolio-item mx-auto"
                            data-bs-toggle="modal"
                            data-bs-target="#"
                        >
                            <img
                                className="img-carousel"
                                src={imagen1}
                                alt="..."
                            />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div
                            className="portfolio-item mx-auto"
                            data-bs-toggle="modal"
                            data-bs-target="#"
                        >
                            <img
                                className="img-carousel"
                                src={imagen22}
                                alt="..."
                            />
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>
        </section>
    )
}

export default Carousel
