import React from "react"
import logoPampa from "../../assets/img/LogoPampaWhite.png"
import logo from "../../assets/img/trtLogo.svg"
import { useNavigate } from "react-router-dom"

const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'auto',
    });
};

const Footer = () => {
    const navigate = useNavigate()
    return (
        <footer className="footer text-center">
            <div className="container">
                <div className="row align-items-center justify-content-center p-2">
                    {/*<!-- Footer festival Text-->*/}
                    <div className="col-lg-6 col-4">
                        <div
                            className="justify-content-center p-2"
                            id="trtLogo"
                        >
                            <img
                                src={logo}
                                alt="TRT Producciones"
                                width={100}
                            />
                            {/*<!-- 
                            <p className="lead mb1 mt-1">Barcelona, España.</p>
                            -->*/}
                        </div>
                        <div className="d-flex justify-content-center gap-sm-4 gap-4 gap-md-4">
                            <a
                                className="btn-social"
                                href="https://www.instagram.com/trtproducciones/"
                                target={"_blank"}
                                rel="noreferrer"
                                aria-labelledby="Instagram TRT Producciones"
                            >
                                <i className="fab fa-fw fa-instagram"></i>
                            </a>
                            <a
                                className="btn-social"
                                href="https://wa.me/+34667569323"
                                target={"_blank"}
                                rel="noreferrer"
                                aria-labelledby="Whtatsapp TRT Producciones"
                            >
                                <i className="fab fa-fw fa-whatsapp"></i>
                            </a>
                            <a
                                className="btn-social"
                                href={"mailto:info@trtproducciones.com"}
                                aria-labelledby="Email TRT Producciones"
                            >
                                <i className="fas fa-envelope"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center py-3">
                    <div id="avisosLegales">
                        <a
                            onClick={() => {
                                navigate("/avisoLegal")
                                goToTop();
                            }}
                        >
                            Aviso legal
                        </a>{" "}
                        |
                        <a
                            onClick={() => {
                                navigate("/politicaCookies")
                                goToTop();
                            }}
                        >
                            {"  "}
                            Política de cookies
                        </a>{" "}
                        |
                        <a
                            onClick={() => {
                                navigate("/politicaPrivacidad")
                                goToTop();
                            }}
                        >
                            {" "}
                            Política de privacidad
                        </a>{" "}
                        |
                        <a
                            onClick={() => {
                                navigate("/condicionesGenerales")
                                goToTop();
                            }}
                        >
                            {" "}
                            Condiciones generales de venta
                        </a>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center p-2">
                    <div id="pampa">
                        <a
                            href="https://www.pampacode.com"
                            target={"_blank"}
                            rel="noreferrer"
                            aria-labelledby="Web Pampa Code"
                        >
                            Developed by
                            <img
                                src={logoPampa}
                                alt="Pampacode"
                                width={45}
                                aria-labelledby="Logo Pampa Code"
                                id="pampaLogo"
                            />
                        </a>
                        {/*<!-- 
                            <p className="lead mb1">
                                <span id="copy">©</span> Junín, BA {" "}
                                <br />
                            <span>{new Date().getFullYear()}</span>
                            </p>
                            -->*/}
                    </div>
                    {/*<!-- 
                        <div className="d-flex justify-content-center gap-sm-4 gap-4 gap-md-4">
                            <a
                                className="btn-social"
                                href="https://www.instagram.com/pampacode"
                                target={"_blank"}
                                rel="noreferrer"
                                aria-labelledby="instagram"
                            >
                                <i className="fab fa-fw fa-instagram"></i>
                            </a>
                            <a
                                className="btn-social"
                                href="https://www.pampacode.com"
                                target={"_blank"}
                                rel="noreferrer"
                                aria-labelledby="Web Pampa Code"
                            >
                                <i className="fas fa-fw fa-globe"></i>
                            </a>
                            <a
                                className="btn-social"
                                href={"mailto:info@pampacode.com"}
                                aria-labelledby="Email Pampa Code"
                            >
                                <i className="fas fa-envelope"></i>
                            </a>
                        </div>
                        -->*/}
                </div>
            </div>
        </footer>
    )
}

export default Footer
