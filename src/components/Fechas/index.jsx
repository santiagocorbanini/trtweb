import ToggleDisplay from "react-toggle-display"
import { useState } from "react"
import { MediaQueries } from "../../const/BreakpointsMediaQueries"
import ValentinaOlguin from "../../assets/img/artistas/Valentina-Olguin-22_22.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import iconoInstagram from "../../assets/img/icono-instagram.svg"
import iconoSpotify from "../../assets/img/icono-spotify.svg"
import ciro from "../../assets/images/ciro1.jpg"
import cris from "../../assets/images/cristianpinto.jpg"
import verEvento from "../../assets/img/verEvento.svg"

const Fechas = () => {
    const [show, setShow] = useState("")

    const handleClick = () => {
        setShow(!show)
    }

    // Const para mapear las redes (seguir...)
    const redes = [
        {
            instagram: {
                url: "https://www.instagram.com/",
                icon: (
                    <FontAwesomeIcon icon="fa-brands fa-instagram" size="xl" />
                ),
            },
        },
    ]

    console.log(redes)

    const { isTabletOrMobile } = MediaQueries()

    return (
            <section className="container-fluid">
                <div className="row g-0">
                    <div className="col-sm w-100 h-100" id="ciro">
                        <h1 className="m-2 title-artist">CIRO Y LOS PERSAS</h1>
                        <h4 className="m-2 title-artist">4 de Octubre / Barcelona Tour</h4>
                        <a href="https://www.instagram.com/2222agencia/" target={"_blank"} rel={"noreferrer"}>
                            <img
                                src={verEvento}
                                width={60}
                                height={60}
                                alt={verEvento}
                            />
                        </a>
                    </div>
                    <div className="col-sm w-100 h-100" id="ciro">
                        <h1 className="m-2 title-artist">CIRO Y LOS PERSAS</h1>
                        <h4 className="m-2 title-artist">4 de Octubre / Barcelona Tour</h4>
                        <a href="https://www.instagram.com/2222agencia/" target={"_blank"} rel={"noreferrer"}>
                            <img
                                src={verEvento}
                                width={60}
                                height={60}
                                alt={verEvento}
                            />
                        </a>    
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-sm">
                        <img src={cris} alt='ciro' className="w-100"/>
                    </div>
                    <div className="col-sm">
                        <img src={ciro} alt='ciro' className="w-100"/>
                    </div>
                </div>


                {/*<!-- Portfolio Grid Items-->*/}
                <div className="row justify-content-center">
                    {/*<!-- Portfolio Item 1 -->*/}
                    <div className="col-md-6 col-lg-3 text-center">
                        <div className="portfolio-item mx-auto">
                            <img
                                className="img-fluid"
                                src={ValentinaOlguin}
                                width={500}
                                height={500}
                                alt="..."
                            />
                            <h4 className="m-2 title-artist">
                                Valentina<br />Olguin
                            </h4>
                            <div className="redes-sociales container d-flex justify-content-around">
                            
                                <a
                                    href="https://www.instagram.com/morus.alba.wav/"
                                    target={"_blank"}
                                    rel={"noreferrer"}
                                >
                                    <img src={iconoInstagram} width={40} height={40}/>
                                </a>
                                <a
                                    href="https://open.spotify.com/artist/2TtsYaNj41ilhQDMNuAb5w?si=sG6Tai5xTbqaq9m0VOA_dw"
                                    target={"_blank"}
                                    rel={"noreferrer"}
                                >
                                    <img src={iconoSpotify} width={40} height={40}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Fechas
