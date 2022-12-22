import ciro from "../../assets/images/ciro1.jpg"
import cris from "../../assets/images/cristianpinto.jpg"
import verEventoBlanco from "../../assets/img/verEventoBlanco.svg"
import verEventoNegro from "../../assets/img/verEventoNegro.svg"

const Eventos = () => {
    return (
        <section className="container-fluid">
            <div className="row g-0">
                <div className="col-sm">
                    <img src={ciro} alt='ciro' className="w-100"/>
                </div>
                <div className="col-sm" id="negro">
                    <div className="col-sm" id="div-fechas">
                        <h1 className="m-2 title-fecha">CIRO Y LOS PERSAS</h1>
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
            <div className="row g-0">
                <div className="col-sm">
                    <img src={cris} alt='ciro' className="w-100"/>
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

        </section>
    )
}

export default Eventos
