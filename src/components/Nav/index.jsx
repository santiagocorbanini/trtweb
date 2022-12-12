import logo from "../../assets/img/trtLogo.svg"
import newLogo from "../../assets/img/logonew2222.png"
import { useNavigate } from "react-router-dom"
import { MediaQueries } from "../../const/BreakpointsMediaQueries"

const Nav = () => {
    const navigate = useNavigate()
    const { isTabletOrMobile } = MediaQueries()
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbarcustom">
            <button
                className="navbar-toggler text-uppercase font-weight-bold text-white"
                id="menu-text"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                =
            </button>
             <img
                src={logo}
                alt={logo}
                id="logo-responsive"
                width={90}
                height={45}
                onClick={() => {
                    navigate("/inicio")
                }}
            />
            <img
                src={logo}
                alt={logo}
                id="logo"
                width={132}
                height={40}
                onClick={() => {
                    navigate("/inicio")
                }}
            />
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav">
                    <li className="nav-link mx-0 mx-lg-1">
                        {isTabletOrMobile ? (
                            <button
                                className="nav-link"
                                onClick={() => {
                                    navigate("/inicio")
                                }}
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarResponsive"
                            >
                                Inicio
                            </button>
                        ) : (
                            <button
                                className="nav-link"
                                onClick={() => {
                                    navigate("/inicio")
                                }}
                            >
                                Inicio
                            </button>
                        )}
                    </li>

                    <li className="nav-link mx-0 mx-lg-1">
                        {isTabletOrMobile ? (
                            <>
                                <button
                                    className="nav-link"
                                    onClick={() => {
                                        navigate("/festival")
                                    }}
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarResponsive"
                                >
                                    Festival
                                </button>
                            </>
                        ) : (
                            <button
                                className="nav-link"
                                onClick={() => {
                                    navigate("/festival")
                                }}
                            >
                                Festival
                            </button>
                        )}
                    </li>
                    <li className="nav-link mx-0 mx-lg-1">
                        {isTabletOrMobile ? (
                            <button
                                className="nav-link"
                                onClick={() => {
                                    navigate("/eventos")
                                }}
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarResponsive"
                            >
                                Proximas Fechas
                            </button>
                        ) : (
                            <button
                                className="nav-link"
                                onClick={() => {
                                    navigate("/eventos")
                                }}
                            >
                                Proximas Fechas
                            </button>
                        )}
                    </li>
                    <li className="nav-link mx-0 mx-lg-1">
                        {isTabletOrMobile ? (
                            <button
                                className="nav-link"
                                onClick={() => {
                                    navigate("/fechas")
                                }}
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarResponsive"
                            >
                                Eventos Realizados
                            </button>
                        ) : (
                            <button
                                className="nav-link"
                                onClick={() => {
                                    navigate("/fechas")
                                }}
                            >
                                Eventos Realizados
                            </button>
                        )}
                    </li>
                    <li className="nav-link mx-0 mx-lg-1">
                        {isTabletOrMobile ? (
                            <button
                                className="nav-link"
                                onClick={() => {
                                    navigate("/nosotros")
                                }}
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarResponsive"
                            >
                                Nosotros
                            </button>
                        ) : (
                            <button
                                className="nav-link"
                                onClick={() => {
                                    navigate("/nosotros")
                                }}
                            >
                                Nosotros
                            </button>
                        )}
                    </li>
                    <li className="nav-link mx-0 mx-lg-1">
                        {isTabletOrMobile ? (
                            <button
                                className="nav-link"
                                onClick={() => {
                                    navigate("/contacto")
                                }}
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarResponsive"
                            >
                                Contacto
                            </button>
                        ) : (
                            <button
                                className="nav-link"
                                id="contact-buton"
                                onClick={() => {
                                    navigate("/contacto")
                                }}
                            >
                                Contacto
                            </button>
                        )}
                    </li>
                        <li className="nav-link mx-0 mx-lg-1">
                        {isTabletOrMobile ? (
                            <button
                                className="nav-link"
                                onClick={() => {
                                    navigate("/acreditacion")
                                }}
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarResponsive"
                            >
                                Acreditacion
                            </button>
                        ) : (
                            <button
                                className="nav-link"
                                id="contact-buton"
                                onClick={() => {
                                    navigate("/acreditacion")
                                }}
                            >
                                Acreditacion
                            </button>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
