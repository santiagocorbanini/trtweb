import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import swal from "sweetalert"
import enviarMail from "../../assets/img/enviarMail.svg"


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

        if (form.current.asunto.value === "") {
            error("Por favor, ingresá tu número de teléfono")
            form.current.asunto.focus()
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
        //}
        //if (!telefonoValido(form.current.telefono.value)) {
        //    error("Por favor, escribe un número de teléfono válido")
        //    form.current.telefono.focus()
        //    return false
        } else {
            emailjs
                .sendForm(
                    "service_51443zc",
                    "template_vcgge1a",
                    form.current,
                    "dB99EqFkUwo-b748Q"
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
                window.location = "http://www.trtagencia.com"
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
                            <label className="mb-2" htmlFor="name">Nombre</label>
                            <div className="mb-3">
                                <input
                                    className="form-control"
                                    name="name"
                                    type="text"
                                    placeholder="Ingresá tu nombre"
                                    data-sb-validations="required"
                                />
                                <div
                                    className="invalid-feedback"
                                    data-sb-feedback="name:required"
                                >
                                    Un nombre es requerido.
                                </div>
                            </div>
                            {/*<!-- Apellido input-->*/}
                            <label className="mb-2" htmlFor="surname">Apellido</label>
                            <div className="mb-3">
                                <input
                                    className="form-control"
                                    name="surname"
                                    type="text"
                                    placeholder="Ingresá tu apellido"
                                    data-sb-validations="required"
                                />
                                <div
                                    className="invalid-feedback"
                                    data-sb-feedback="surname:required"
                                >
                                    Un apellido es requerido.
                                </div>
                            </div>
                            {/*<!-- Email address input-->*/}
                            <label className="mb-2" htmlFor="email">Email</label>
                            <div className="mb-3">
                                <input
                                    className="form-control"
                                    name="email"
                                    type="email"
                                    placeholder="nombre@ejemplo.com"
                                    data-sb-validations="required,email"
                                />
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
                            {/*<!-- Asunto number input-->*/}
                            <label className="mb-2" htmlFor="asunto">Asunto</label>
                            <div className="mb-3">
                                <input
                                    className="form-control"
                                    name="asunto"
                                    type="text"
                                    placeholder="Ingresá el asunto"
                                    data-sb-validations="required"
                                />
                                <div
                                    className="invalid-feedback"
                                    data-sb-feedback="asunto:required"
                                >
                                    Un asunto es requerido
                                </div>
                            </div> 
                            {/*<!-- Message input-->*/}
                            <label className="mb-2" htmlFor="message">Mensaje</label>
                            <div className="mb-3">
                                <textarea
                                    className="form-control"
                                    name="mensaje"
                                    type="text"
                                    defaultValue=""
                                    placeholder="Ingresá tu mensaje aquí"
                                    data-sb-validations="required"
                                    id="text-area"
                                ></textarea>
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
                                    type="submit"
                                >
                                    <img
                                    src={enviarMail}
                                    width={60}
                                    height={60}
                                    alt={enviarMail}
                                    />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
