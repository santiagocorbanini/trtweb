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
                        <h4 className="date-fecha">3/11 Barcelona Razzmatazz - SOLD OUT</h4>
                        <h4 className="date-fecha">4/11 Valencia Sala Repvblicca - SOLD OUT</h4>
                        <h4 className="date-fecha">6/11 Mallorca Es Gremi - SOLD OUT</h4>
                        <h4 className="date-fecha">10/11 Alicante Sala The One - SOLD OUT</h4>
                        <h4 className="date-fecha">11/11 Málaga Sala Paris 15 - SOLD OUT</h4>
                        <h4 className="date-fecha">13/11 Madrid Sala Riviera - SOLD OUT</h4>
                        {/*
                        <a href="https://www.instagram.com/trtproducciones/" target={"_blank"} rel={"noreferrer"}>
                        <img
                            src={verEventoBlanco}
                            width={60}
                            height={60}
                            alt={verEventoBlanco}
                            />
                        </a>
                        */}
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
                        <h4 className="date-fecha">6/10 Madrid Sala Independance</h4>
                        <h4 className="date-fecha">7/10 Valencia Peter Rock Club</h4>
                        <h4 className="date-fecha">9/10 Barcelona Razzmatazz - SOLD OUT</h4>
                        {/*
                        <a href="https://www.instagram.com/trtproducciones/" target={"_blank"} rel={"noreferrer"}>
                        <img
                            src={verEventoNegro}
                            width={60}
                            height={60}
                            alt={verEventoNegro}
                            />
                        </a>
                        */}
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
                        <h4 className="date-fecha">8/9 Madrid Sala Cafe Berlin - SOLD OUT</h4>
                        <h4 className="date-fecha">9/9 Alicante Sala The One</h4>
                        <h4 className="date-fecha">17/9 Barcelona Sala Wolf - SOLD OUT</h4>
                        {/*
                        <a href="https://www.instagram.com/trtproducciones/" target={"_blank"} rel={"noreferrer"}>
                        <img
                            src={verEventoBlanco}
                            width={60}
                            height={60}
                            alt={verEventoBlanco}
                            />
                        </a>
                        */}
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
                        <h4 className="date-fecha">26/5 Barcelona Razzmatazz - SOLD OUT</h4>
                        <h4 className="date-fecha">27/5 Mallorca Es Gremi</h4>
                        <h4 className="date-fecha">28/5 Valencia Madison Club</h4>
                        <h4 className="date-fecha">3/6 Málaga Sala Trinchera</h4>
                        <h4 className="date-fecha">4/6 Madrid Sala Independance</h4>
                        {/*
                        <a href="https://www.instagram.com/trtproducciones/" target={"_blank"} rel={"noreferrer"}>
                        <img
                            src={verEventoNegro}
                            width={60}
                            height={60}
                            alt={verEventoNegro}
                            />
                        </a>
                        */}
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
                        <h4 className="date-fecha">31/4 Barcelona Razzmatazz - SOLD OUT</h4>
                        <h4 className="date-fecha">2/4 Mallorca Es Gremi</h4>
                        <h4 className="date-fecha">7/4 Madrid Sala Riviera</h4>
                        <h4 className="date-fecha">8/4 Valencia Sala Repvblicca - SOLD OUT</h4>
                        <h4 className="date-fecha">9/4 Málaga Sala Paris 15 - SOLD OUT</h4>
                        {/*
                        <a href="https://www.instagram.com/trtproducciones/" target={"_blank"} rel={"noreferrer"}>
                        <img
                            src={verEventoBlanco}
                            width={60}
                            height={60}
                            alt={verEventoBlanco}
                            />
                        </a>
                        */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Eventos
