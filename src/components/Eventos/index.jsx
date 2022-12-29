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
                        <h1 className="title-fecha">CIRO Y LOS PERSAS</h1>
                        <h4 className="date-fecha">Del 3/11 al 13/11 - Gira España '22</h4>
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
                        <h1 className="title-fecha">CRUZANDO EL CHARCO</h1>
                        <h4 className="date-fecha">6, 7 y 9 de Octubre - Gira España '22</h4>
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
                    <img src={ciro} alt='ciro' className="w-100"/>
                </div>
                <div className="col-sm" id="negro">
                    <div className="col-sm" id="div-fechas">
                        <h1 className="title-fecha">LOS TOTORA</h1>
                        <h4 className="date-fecha">8, 9 Y 17 DE Septiembre - Gira España '22</h4>
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
                        <h1 className="title-fecha">GUASONES</h1>
                        <h4 className="date-fecha">Del 25/6 al 4/6 - Gira España '22</h4>
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
                    <img src={ciro} alt='ciro' className="w-100"/>
                </div>
                <div className="col-sm" id="negro">
                    <div className="col-sm" id="div-fechas">
                        <h1 className="title-fecha">LOS FUNDAMENTALISTAS DEL AIRE ACONDICIONADO</h1>
                        <h4 className="date-fecha">Del 31/3 al 9/4 - Gira España '22</h4>
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

export default Eventos
