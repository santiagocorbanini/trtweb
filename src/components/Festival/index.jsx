import verEventoBlanco from "../../assets/img/verEventoBlanco.svg"

const Festival = () => {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center tickets-festival">
                <button type="button" class="btn btn-primary" id="boton-festival">Comprar tickets</button>
            </div>

            <section
                className="page-section d-flex justify-content-center"
                id="inicio"
            >
                {/*
                <div className="container-body">
                    <a href="https://www.instagram.com/trtproducciones/" target={"_blank"} rel={"noreferrer"}>
                        <img
                            src={verEventoBlanco}
                            width={60}
                            height={60}
                            alt={verEventoBlanco}
                            id="botonFestival"
                        />
                    </a>
                </div>
                */}
            </section>
        </>
    )
}

export default Festival
