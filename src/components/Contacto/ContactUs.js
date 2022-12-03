import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import swal from "sweetalert"
import iconoInstagram from "../../assets/img/icono-instagram-contacto.svg"
import iconoSpotify from "../../assets/img/icono-spotify-contacto.svg"
import iconoYoutube from "../../assets/img/icono-youtube-contacto.svg"


export const ContactUs = () => {
    const form = useRef()

    const emailVálido = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }
    const telefonoValido = (telefonoCorrecto) => {
        return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
            telefonoCorrecto
        )
    }

    const sendEmail = (e) => {
        e.preventDefault()

        console.log(form.current.name.value)
        if (form.current.name.value === "") {
            error("Por favor, ingresá tu nombre")
            form.current.name.focus()
            return false
        }
        if (form.current.email.value === "") {
            error("Por favor, ingresá tu correo electrónico")
            form.current.email.focus()
            return false
        }

        if (form.current.telefono.value === "") {
            error("Por favor, ingresá tu número de teléfono")
            form.current.telefono.focus()
            return false
        }

        if (form.current.mensaje.value === "") {
            error("Por favor, ingresá un mensaje")
            form.current.mensaje.focus()
            return false
        }

        if (!emailVálido(form.current.email.value)) {
            error("Por favor, escribe un correo electrónico válido")
            form.current.email.focus()
            return false
        }
        if (!telefonoValido(form.current.telefono.value)) {
            error("Por favor, escribe un número de teléfono válido")
            form.current.telefono.focus()
            return false
        } else {
            emailjs
                .sendForm(
                    "service_u02fm36",
                    "template_b0x2ya9",
                    form.current,
                    "user_kSw3r88rUTBSk2tQWOdl4"
                )
                .then(
                    (result) => {
                        console.log(result.text)
                    },
                    (error) => {
                        console.log(error.text)
                    }
                )

            success()
        }

        function success() {
            swal({
                title: "Bien hecho!",
                text: "El mensaje ya fue enviado. Muchas Gracias",
                icon: "success",
                button: "Finalizar",
            }).then(function () {
                window.location = "http://www.2222agencia.com"
            })
        }

        function error(mensaje) {
            swal({
                title: "Vuelva a insertar",
                text: mensaje,
                icon: "error",
                button: "Volver",
            })
        }
    }

    return (
        <section className="page-section" id="contact">
            <div className="container">
                {/*<!-- reeemplazar con iconos con fondo blanco y sus hrefs -->*/}
                <div className="redes-contact container d-flex justify-content-center">
                    <a href="https://www.instagram.com/2222agencia/" target={"_blank"} rel={"noreferrer"}>
                        <img
                            src={iconoInstagram}
                            width={40}
                            height={40}
                            alt={iconoInstagram}
                        />
                    </a>
                    <a href="https://www.instagram.com/2222agencia/" target={"_blank"} rel={"noreferrer"}>
                        <img
                            src={iconoSpotify}
                            width={40}
                            height={40}
                            alt={iconoSpotify}
                        />
                    </a>
                    <a href="https://www.instagram.com/2222agencia/" target={"_blank"} rel={"noreferrer"}>
                        <img
                            src={iconoYoutube}
                            width={40}
                            height={40}
                            alt={iconoYoutube}
                        />
                    </a>
                </div>

                {/*<!-- Contact Section Form-->*/}
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-xl-7">
                        {/*<!-- * * * * * * * * * * * * * * *-->*/}
                        {/*<!-- * * SB Forms Contact Form * *-->*/}
                        {/*<!-- * * * * * * * * * * * * * * *-->*/}
                        {/*<!-- This form is pre-integrated with SB Forms.-->*/}
                        {/*<!-- To make this form functional, sign up at-->*/}
                        {/*<!-- https://startbootstrap.com/solution/contact-forms-->*/}
                        {/*<!-- to get an API token!-->*/}
                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            id="contactForm"
                            data-sb-form-api-token="API_TOKEN"
                        >
                            {/*<!-- Name input-->*/}
                            <div className="form-floating mb-3">
                                <input
                                    className="form-control"
                                    name="name"
                                    type="text"
                                    placeholder="Enter your name..."
                                    data-sb-validations="required"
                                />
                                <label htmlFor="name">NOMBRE</label>
                                <div
                                    className="invalid-feedback"
                                    data-sb-feedback="name:required"
                                >
                                    Un nombre es requerido.
                                </div>
                            </div>
                            {/*<!-- Email address input-->*/}
                            <div className="form-floating mb-3">
                                <input
                                    className="form-control"
                                    name="email"
                                    type="email"
                                    placeholder="name@example.com"
                                    data-sb-validations="required,email"
                                />
                                <label htmlFor="email">MAIL</label>
                                <div
                                    className="invalid-feedback"
                                    data-sb-feedback="email:required"
                                >
                                    Un email es requerido.
                                </div>
                                <div
                                    className="invalid-feedback"
                                    data-sb-feedback="email:email"
                                >
                                    El email no es valido.
                                </div>
                            </div>
                            {/*<!-- Phone number input-->*/}
                            {/*                             <div className="form-floating mb-3">
                                <input
                                    className="form-control"
                                    name="telefono"
                                    type="tel"
                                    placeholder="(123) 456-7890"
                                    data-sb-validations="required"
                                />
                                <label htmlFor="phone">Teléfono</label>
                                <div
                                    className="invalid-feedback"
                                    data-sb-feedback="phone:required"
                                >
                                    Un numero telefonico es requerido
                                </div>
                            </div> */}
                            {/*<!-- Message input-->*/}
                            <div className="form-floating mb-3">
                                <textarea
                                    className="form-control"
                                    name="mensaje"
                                    type="text"
                                    defaultValue=""
                                    placeholder="Enter your message here..."
                                    data-sb-validations="required"
                                    id="text-area"
                                ></textarea>
                                <label htmlFor="message">MENSAJE</label>
                                <div
                                    className="invalid-feedback"
                                    data-sb-feedback="message:required"
                                >
                                    Un mensaje es requerido.
                                </div>
                            </div>
                            {/*<!-- Submit success message-->*/}
                            {/*<!---->*/}
                            {/*<!-- This is what your users will see when the form-->*/}
                            {/*<!-- has successfully submitted-->*/}
                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center mb-3">
                                    <div className="fw-bolder">
                                        Form submission successful!
                                    </div>
                                    To activate this form, sign up at
                                    <br />
                                    <a href="https://startbootstrap.com/solution/contact-forms">
                                        https://startbootstrap.com/solution/contact-forms
                                    </a>
                                </div>
                            </div>
                            {/*<!-- Submit error message-->*/}
                            {/*<!---->*/}
                            {/*<!-- This is what your users will see when there is-->*/}
                            {/*<!-- an error submitting the form-->*/}
                            <div className="d-none" id="submitErrorMessage">
                                <div className="text-center text-danger mb-3">
                                    Error sending message!
                                </div>
                            </div>
                            {/*<!-- Submit Button-->*/}
                            <div>
                                <button
                                    className="btn btn-primary btn-xl"
                                    id="submitButton"
                                    type="submit"
                                >
                                    ENVIAR
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
