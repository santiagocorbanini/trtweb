import logo from "../../assets/img/trtLogo.svg"
import Instagram from "../../assets/images/Logos/instagram_logo.png"
import { useNavigate } from "react-router-dom"
import { MediaQueries } from "../../const/BreakpointsMediaQueries"

const Nav = () => {
    const navigateTo = () => {
        window.open("https://www.instagram.com/trtproducciones/")
    }
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
                width={126}
                height={35}
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
                                    navigate("/fechas")
                                }}
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarResponsive"
                            >
                                Próximas Fechas
                            </button>
                        ) : (
                            <button
                                className="nav-link"
                                onClick={() => {
                                    navigate("/fechas")
                                }}
                            >
                                Próximas Fechas
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
                                Eventos Realizados
                            </button>
                        ) : (
                            <button
                                className="nav-link"
                                onClick={() => {
                                    navigate("/eventos")
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
                    {/* -------------------------------------- */}
                    <li className="dropdown">
                        <button
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            id="dropdown-navbar"
                        >
                            CONTACTO
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <button
                                    className="dropdown-item"
                                    id="contact-button"
                                    onClick={() => {
                                        navigate("/contacto")
                                    }}
                                >
                                    Contacto
                                </button>
                            </li>
                            <button
                                className="dropdown-item"
                                id="contact-button"
                                onClick={() => {
                                    navigate("/acreditacion")
                                }}
                            >
                                Acreditaciones
                            </button>
                            <li></li>
                            <li></li>
                        </ul>
                    </li>
                    {/* -------------------------------------- */}
                    <li className="nav-link mx-0 mx-lg-1">
                        {isTabletOrMobile ? (
                            <button
                                className="nav-link items-contacto"
                                onClick={() => {
                                    navigate("/contacto")
                                }}
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarResponsive"
                            >
                                Contacto
                            </button>
                        ) : (
                            <></>
                        )}
                    </li>
                    <li className="nav-link mx-0 mx-lg-1">
                        {isTabletOrMobile ? (
                            <button
                                className="nav-link items-contacto"
                                onClick={() => {
                                    navigate("/acreditacion")
                                }}
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarResponsive"
                            >
                                Acreditaciones
                            </button>
                        ) : (
                            <></>
                        )}
                    </li>
                </ul>
            </div>
            {/*             Chequear Logo INSTA responsive
             */}
            {/*             <img
                src={Instagram}
                alt={Instagram}
                id="Instagram-responsive"
                width={20}
                height={20}
                onClick={() => {
                    navigate("/inicio")
                }}
            /> */}
            <img
                src={Instagram}
                alt={Instagram}
                id="logoInstagram"
                width={20}
                height={20}
                className="-4"
                onClick={() => navigateTo()}
            />
        </nav>
    )
}

export default Nav
