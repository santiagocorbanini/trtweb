import ToggleDisplay from "react-toggle-display"
import { useState } from "react"
import { MediaQueries } from "../../const/BreakpointsMediaQueries"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ciro from "../../assets/images/ciro1.jpg"
import cris from "../../assets/images/cristianpinto.jpg"
import verEventoBlanco from "../../assets/img/comprarTicketsBlanco.svg"
import verEventoNegro from "../../assets/img/comprarTicketsNegro.svg"

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
                <div className="col-sm">
                    <img src={ciro} alt='ciro' className="w-100"/>
                </div>
                <div className="col-sm" id="blanco">
                    <div className="col-sm" id="div-fechas">
                        <h1 className="m-2 title-fecha">CIRO Y LOS PERSAS</h1>
                        <h4 className="m-2 date-fecha">4 de Octubre / Barcelona Tour</h4>
                        <a href="https://www.instagram.com/2222agencia/" target={"_blank"} rel={"noreferrer"}>
                        <img
                            src={verEventoNegro}
                            width={60}
                            height={60}
                            alt={verEventoNegro}
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="row g-0">
                <div className="col-sm">
                    <img src={cris} alt='ciro' className="w-100"/>
                </div>
                <div className="col-sm">  
                    <div className="col-sm" id="div-fechas">
                        <h1 className="m-2 title-fecha">CRUZANDO EL CHARCO</h1>
                        <h4 className="m-2 date-fecha">4 de Octubre / Barcelona Tour</h4>
                        <a href="https://www.instagram.com/2222agencia/" target={"_blank"} rel={"noreferrer"}>
                        <img
                            src={verEventoBlanco}
                            width={60}
                            height={60}
                            alt={verEventoBlanco}
                            />
                        </a>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Fechas
