import React from "react"
import logoPampa from "../../assets/img/LogoPampaWhite.png"
import logo from "../../assets/img/trtLogo.svg"

const Footer = () => {
    return (
        <footer className="footer text-center">
            <div className="container">
                <div className="row justify-content-between">
                    {/*<!-- Footer Location
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">
                            2215 John Daniel Drive
                            <br />
                            Clark, MO 65243
                        </p>
                    </div>
                    -->*/}
                    {/*<!-- Footer Social Icons-->*/}
                    <div className="col-lg-6 col-4 flex-column mb-5 mb-lg-0">
                        <div className="container footer-description">
                            <a
                                href="https://www.pampacode.com"
                                target={"_blank"}
                                rel="noreferrer"
                                aria-labelledby="Web Pampa Code"
                            >
                                <img
                                    src={logoPampa}
                                    alt="Pampacode"
                                    width={80}
                                    aria-labelledby="Logo Pampa Code"
                                />
                            </a>
                            <p className="lead mb1">
                                <span id="copy">©</span> Junín, BA {" "}
                                <br />
                            <span>{new Date().getFullYear()}</span>
                            </p>
                        </div>
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
                    </div>
                    {/*<!-- Footer festival Text-->*/}
                    <div className="col-lg-6 col-4">
                        <div className="container footer-description">
                            <img src={logo} alt="TRT Producciones" width={75} />
                            <p className="lead mb1 mt-1">Barcelona, España.</p>
                        </div>
                        <div className="d-flex justify-content-center gap-sm-4 gap-4 gap-md-4">
                            <a
                                className="btn-social"
                                href="https://www.instagram.com/2222agencia/"
                                target={"_blank"}
                                rel="noreferrer"
                                aria-labelledby="Instargam TRT Agencia"
                            >
                                <i className="fab fa-fw fa-instagram"></i>
                            </a>
                            <a
                                className="btn-social"
                                href="https://wa.me/+34667569323"
                                target={"_blank"}
                                rel="noreferrer"
                                aria-labelledby="Whtatsapp TRT Agencia"
                            >
                                <i className="fab fa-fw fa-whatsapp"></i>
                            </a>
                            <a
                                className="btn-social"
                                href={"mailto:info@2222agencia.com"}
                                aria-labelledby="Email TRT Agencia"
                            >
                                <i className="fas fa-envelope"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
