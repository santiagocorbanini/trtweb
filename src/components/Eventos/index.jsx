import iconoLugar from "../../assets/img/icono-lugar.svg"
import iconoTicket from "../../assets/img/icono-ticket.svg"

const Eventos = () => {
    return (
        <section className="page-section portfolio bg-secundary" id="events">
            <div className="container container-body">

            <div className="meses">
                    <div className="eventos-mes">
                        NOV
                    </div>
                    <div className="eventos">
                        <div className="evento-1">
                            <div className="artista-nombre">
                                Ciro
                            </div>
                            <div className="lugar">
                                <div className="lugar-div">
                                    <div className="lugar-nombre">
                                        Gira españa
                                    </div>
                                    <img src={iconoLugar} width={30} height={30} alt={iconoLugar}/>
                                </div>
                                <div className="lugar-div lugar-div-entrada">
                                    <a
                                    href="https://sfx.janto.es/"
                                    target={'_blank'}
                                    rel={'noreferrer'}
                                    >
                                        <div className="lugar-fecha">
                                        Compr&aacute; tu entrada
                                    </div>
                                    <img src={iconoTicket} width={30} height={30} alt={iconoTicket}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*
                <div className="meses">
                    <div className="eventos-mes">
                        OCT
                    </div>
                    <div className="eventos">
                        <div className="evento-1">
                            <div className="artista-nombre">
                                Guasones
                            </div>
                            <div className="lugar">
                                <div className="lugar-div">
                                    <div className="lugar-nombre">
                                        barcelona, españa
                                    </div>
                                    <img src={iconoLugar} width={30} height={30}/>
                                </div>
                                <div className="lugar-div">
                                    <div className="lugar-fecha">
                                        Compra tu entrada
                                    </div>
                                    <img src={iconoTicket} width={30} height={30}/>
                                </div>
                            </div>
                        </div>
                        <div className="evento-1">
                            <div className="artista-nombre" >
                                Cruzando el charco
                            </div>
                            <div className="lugar">
                                <div className="lugar-div">
                                    <div className="lugar-nombre">
                                        barcelona, españa
                                    </div>
                                    <img src={iconoLugar} width={30} height={30}/>
                                </div>
                                <div className="lugar-div">
                                    <div className="lugar-fecha">
                                        Compra tu entrada
                                    </div>
                                    <img src={iconoTicket} width={30} height={30}/>
                                </div>
                            </div>
                        </div>
                        <div className="evento-1">
                            <div className="artista-nombre">
                                Los Totora
                            </div>
                            <div className="lugar">
                                <div className="lugar-div">
                                    <div className="lugar-nombre">
                                        barcelona, españa
                                    </div>
                                    <img src={iconoLugar} width={30} height={30}/>
                                </div>
                                <div className="lugar-div">
                                    <div className="lugar-fecha">
                                        Compra tu entrada
                                    </div>
                                    <img src={iconoTicket} width={30} height={30}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="meses">
                    <div className="eventos-mes">
                            NOV
                    </div>
                    <div className="eventos">
                            <div className="evento-1">
                                <div className="artista-nombre">
                                    Ciro
                                </div>
                                <div className="lugar">
                                    <div className="lugar-div">
                                        <div className="lugar-nombre">
                                            Gira España
                                        </div>
                                        <img src={iconoLugar} width={30} height={30}/>
                                    </div>
                                    <div className="lugar-div">
                                        <div className="lugar-fecha">
                                            Próximamente
                                        </div>
                                        <img src={iconoTicket} width={30} height={30}/>
                                    </div>
                                </div>
                            </div>
                            <div className="evento-1">
                                <div className="artista-nombre">
                                    Colour Fools
                                </div>
                                <div className="lugar">
                                    <div className="lugar-div">
                                        <div className="lugar-nombre">
                                            barcelona, españa
                                        </div>
                                        <img src={iconoLugar} width={30} height={30}/>
                                    </div>
                                    <div className="lugar-div">
                                        <div className="lugar-fecha">
                                            Próximamente
                                        </div>
                                        <img src={iconoTicket} width={30} height={30}/>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="meses">
                    <div className="eventos-mes">
                            DIC
                    </div>
                    <div className="eventos">
                            <div className="evento-1">
                                <div className="artista-nombre">
                                    Polina Grace
                                </div>
                                <div className="lugar">
                                    <div className="lugar-div">
                                        <div className="lugar-nombre">
                                            barcelona, españa
                                        </div>
                                        <img src={iconoLugar} width={30} height={30}/>
                                    </div>
                                    <div className="lugar-div">
                                        <div className="lugar-fecha">
                                            Próximamente
                                        </div>
                                        <img src={iconoTicket} width={30} height={30}/>
                                    </div>
                                </div>
                            </div>
                            <div className="evento-1">
                                <div className="artista-nombre">
                                    Morus Alba
                                </div>
                                <div className="lugar">
                                    <div className="lugar-div">
                                        <div className="lugar-nombre">
                                            Sala Apolo, Barcelona
                                        </div>
                                        <img src={iconoLugar} width={30} height={30}/>
                                    </div>
                                    <div className="lugar-div">
                                        <div className="lugar-fecha">
                                            Próximamente
                                        </div>
                                        <img src={iconoTicket} width={30} height={30}/>
                                    </div>
                                </div>
                            </div>
                            <div className="evento-1">
                                <div className="artista-nombre">
                                    Valentina Olguin
                                </div>
                                <div className="lugar">
                                    <div className="lugar-div">
                                        <div className="lugar-nombre">
                                            Sala Apolo, Barcelona
                                        </div>
                                        <img src={iconoLugar} width={30} height={30}/>
                                    </div>
                                    <div className="lugar-div">
                                        <div className="lugar-fecha">
                                            Próximamente
                                        </div>
                                        <img src={iconoTicket} width={30} height={30}/>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                */}
            </div>
        </section>
    )
}

export default Eventos
