import logo from "../../assets/img/logo-2222.svg"
import newLogo from "../../assets/img/logonew2222.png"
import { useNavigate } from "react-router-dom"
import { MediaQueries } from "../../const/BreakpointsMediaQueries"

const Nav = () => {
    const navigate = useNavigate()
    const { isTabletOrMobile } = MediaQueries()
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbarcustom">
            <div className="container">
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
                    height={15}
                    onClick={() => {
                        navigate("/nosotros")
                    }}
                />
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <li className="nav-link mx-0 mx-lg-1">
                            {isTabletOrMobile ? (
                                <>
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
                                </>
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
                                        navigate("/servicios")
                                    }}
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarResponsive"
                                >
                                    Servicios
                                </button>
                            ) : (
                                <button
                                    className="nav-link"
                                    onClick={() => {
                                        navigate("/servicios")
                                    }}
                                >
                                    Servicios
                                </button>
                            )}
                        </li>
                        <li className="nav-link mx-0 mx-lg-1">
                            {isTabletOrMobile ? (
                                <button
                                    className="nav-link"
                                    onClick={() => {
                                        navigate("/artistas")
                                    }}
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarResponsive"
                                >
                                    Artistas
                                </button>
                            ) : (
                                <button
                                    className="nav-link"
                                    onClick={() => {
                                        navigate("/artistas")
                                    }}
                                >
                                    Artistas
                                </button>
                            )}
                        </li>
                        <div className="logo-container">
                            <img
                                src={logo}
                                alt={logo}
                                id="logo"
                                width={132}
                                height={23}
                                onClick={() => {
                                    navigate("/nosotros")
                                }}
                            />
                        </div>
                        {/*
                        <li className="nav-link mx-0 mx-lg-1">
                            {isTabletOrMobile ? (
                                <button
                                    className="nav-link"
                                    onClick={() => {
                                        navigate("/trabajos")
                                    }}
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarResponsive"
                                >
                                    Trabajos
                                </button>
                            ) : (
                                <button
                                    className="nav-link"
                                    onClick={() => {
                                        navigate("/trabajos")
                                    }}
                                >
                                    Trabajos
                                </button>
                            )}
                        </li>
                        */}
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
                                    Eventos
                                </button>
                            ) : (
                                <button
                                    className="nav-link"
                                    onClick={() => {
                                        navigate("/eventos")
                                    }}
                                >
                                    Eventos
                                </button>
                            )}
                        </li>
                        <li className="nav-link mx-0 mx-lg-1">
                            {isTabletOrMobile ? (
                                <button
                                    className="nav-link"
                                    onClick={() => {
                                        navigate("/convocatoria")
                                    }}
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarResponsive"
                                >
                                    Convocatoria
                                </button>
                            ) : (
                                <button
                                    className="nav-link"
                                    onClick={() => {
                                        navigate("/convocatoria")
                                    }}
                                >
                                    Convocatoria
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
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
