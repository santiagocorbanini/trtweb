import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import swal from "sweetalert"
import enviarSolicitud from "../../assets/img/enviarSolicitud.svg"
import { acreditacionesOptions, freelanceOptions } from "./options"
import Select from "react-select"

export const AcreditacionUs = () => {
    // REACT-SELECT DROPDOWNs //

    const customStyles = {
        control: (base, state) => ({
            ...base,
            background: "#111111",
            // Overwrittes the different states of border
            borderColor: state.isFocused ? "white" : "white",
            // Removes weird border around container
            boxShadow: state.isFocused ? null : null,
            "&:hover": {
                // Overwrittes the different states of border
                borderColor: state.isFocused ? "white" : "white",
            },
        }),
    }
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

        //if (form.current.telefono.value === "") {
        //    error("Por favor, ingresá tu número de teléfono")
        //    form.current.telefono.focus()
        //    return false
        //}

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
                <div className=" justify-content-center">
                    <div>
                        <p className="px-2 text-center">
                            Si perteneces a algún medio de comunicación o te
                            dedicas al mundo de la comunicación, ya puedes
                            soicitaro.
                        </p>
                        <p className="px-2 text-center">
                            OBTÉN NUESTRO PASE DE PRENSA Y CUBRE NUESTROS
                            EVENTOS.
                        </p>
                    </div>
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
                            <label htmlFor="name">Nombre Completo</label>
                            <div className="form-floating mb-3">
                                <input
                                    className="form-control"
                                    name="name"
                                    type="text"
                                    placeholder="Enter your name..."
                                    data-sb-validations="required"
                                />
                                <div
                                    className="invalid-feedback"
                                    data-sb-feedback="name:required"
                                >
                                    Un nombre es requerido.
                                </div>
                            </div>
                            {/*<!-- Medio de Comunicaion input-->*/}
                            <label htmlFor="medioDeComunicacion">
                                    Medio de Comunicaión
                            </label>
                            <div className="form-floating mb-3">
                                <input
                                    className="form-control"
                                    name="medioDeComunicacion"
                                    type="text"
                                    placeholder="Enter your apellido..."
                                    data-sb-validations="required"
                                />
                                <div
                                    className="invalid-feedback"
                                    data-sb-feedback="medioDeComunicacion:required"
                                >
                                    Un medio de Comunicaión es requerido.
                                </div>
                            </div>
                            {/*<!-- Email address input-->*/}
                            <label htmlFor="email">Email</label>
                            <div className="form-floating mb-3">
                                <input
                                    className="form-control"
                                    name="email"
                                    type="email"
                                    placeholder="name@example.com"
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
                            {/*<!-- Acreditacion input-->*/}
                            <label htmlFor="name">Tipo de acreditación</label>
                            <div className="form-floating mb-3 react-select">
{/*                                 <input
                                    className="form-control"
                                    name="acreditacion"
                                    type="select"
                                    placeholder="Enter your Acreditacion..."
                                    data-sb-validations="required"
                                />
                                <label htmlFor="acreditacion">
                                    Tipo de acreditación
                                </label>
                                <div
                                    className="invalid-feedback"
                                    data-sb-feedback="acreditacion:required"
                                >
                                    Una Acreditacion es requerida
                                </div> */}
                                <Select
                                    options={acreditacionesOptions}
                                    styles={customStyles}
                                    className="form-floating mb-3 react-select"
                                    placeholder="Selecciona.."
                                    name="acreditacion"
                                    id="react-select"
                                    required
                                />
                            </div>
                            {/*<!-- Freelance input-->*/}
                            <label htmlFor="name">¿Eres Freelancer?</label>
                            <div className="form-floating mb-3">
                                <Select
                                    options={freelanceOptions}
                                    styles={customStyles}
                                    placeholder="Selecciona.."
                                    name="freelance"
                                    required
                                />
                            </div>
                            {/*<!-- Red Social input-->*/}
                            <label htmlFor="redSocial">
                                    Déjanos tu web y/o redes sociales
                            </label>
                            <div className="form-floating mb-3">
                                <input
                                    className="form-control"
                                    name="redSocial"
                                    type="text"
                                    placeholder="Enter your redSocial..."
                                    data-sb-validations="required"
                                />
                                <div
                                    className="invalid-feedback"
                                    data-sb-feedback="redSocial:required"
                                >
                                    Una redSocial es requerida
                                </div>
                            </div>
                            {/*<!-- ConciertoInteresado input-->*/}
                            <label htmlFor="conciertoInteresado">
                                    A qué concierto estás interesado/a acudir?
                            </label>
                            <div className="form-floating mb-3">
                                <input
                                    className="form-control"
                                    name="conciertoInteresado"
                                    type="text"
                                    placeholder="Enter your redSocial..."
                                    data-sb-validations="required"
                                />
                                <div
                                    className="invalid-feedback"
                                    data-sb-feedback="conciertoInteresado:required"
                                >
                                    Un Concierto Interesado es requerido
                                </div>
                            </div>
                            {/*<!-- Observaciones input-->*/}
                            <label htmlFor="observaciones">
                                    Observaciones
                            </label>
                            <div className="form-floating mb-3">
                                <textarea
                                    className="form-control"
                                    name="observaciones"
                                    type="text"
                                    defaultValue=""
                                    placeholder="Enter your Observaciones here..."
                                    data-sb-validations="required"
                                    id="text-area"
                                ></textarea>
                                <div
                                    className="invalid-feedback"
                                    data-sb-feedback="observaciones:required"
                                >
                                    Una Observacion es requerida.
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
                                <button type="submit">
                                    <img
                                        src={enviarSolicitud}
                                        width={60}
                                        height={60}
                                        alt={enviarSolicitud}
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
