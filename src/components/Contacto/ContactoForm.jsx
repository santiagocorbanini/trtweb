import { useRef } from "react"
import { useFormik } from "formik"
import emailjs from "@emailjs/browser"
import swal from "sweetalert"
import * as Yup from "yup"
import enviarMail from "../../assets/img/enviarMail.svg"

export default function ContactoForm(props) {
    const form = useRef()
    const formik = useFormik({
        initialValues: {
            name: "",
            apellido: "",
            email: "",
            asunto: "",
            mensaje: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, "Minimo 2 caracteres")
                .max(15, "Maximo 15 caracteres")
                .required("El nombre es requerido"),
            apellido: Yup.string().required("El apellido es requerido"),
            email: Yup.string()
                .email("Formato de email inválido")
                .required("El email es requerido"),
            asunto: Yup.string().required("Asunto es requerido"),
            mensaje: Yup.string().required("Un mensaje es requerido"),
        }),
        onSubmit: (values) => {
            console.log(values)
            sendEmail()
        },
    })

    const sendEmail = () => {
        if (true) {
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
        } else {
            error()
        }
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

    return (
        <section className="page-section" id="contact">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-xl-7">
                        <form
                            onSubmit={formik.handleSubmit}
                            ref={form}
                            id="contactForm"
                            data-sb-form-api-token="API_TOKEN"
                        >
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    {/* ////////// NAME ////////// */}
                                    <div className="mb-3">
                                        <label className="mb-1">Nombre</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="name"
                                            id="name"
                                            value={formik.values.name}
                                            onChange={formik.handleChange}
                                            placeholder="Ingresá tu nombre"
                                        />
                                        {formik.errors.name &&
                                            formik.touched.name && (
                                                <p className="mt-1">
                                                    {formik.errors.name}
                                                </p>
                                            )}
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    {/* ////////// Apellido ////////// */}
                                    <div className="mb-3">
                                        <label className="mb-1">Apellido</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="apellido"
                                            id="apellido"
                                            value={formik.values.apellido}
                                            onChange={formik.handleChange}
                                            placeholder="Ingresá tu apellido"
                                        />
                                        {formik.errors.apellido &&
                                            formik.touched.apellido && (
                                                <p className="mt-1">
                                                    {formik.errors.apellido}
                                                </p>
                                            )}
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    {/* ////////// EMAIL ////////// */}
                                    <div className="mb-3">
                                        <label className="mb-1">Email</label>
                                        <input
                                            className="form-control"
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="nombre@ejemplo.com"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.errors.email &&
                                            formik.touched.email && (
                                                <p className="mt-1">
                                                    {formik.errors.email}
                                                </p>
                                            )}
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    {/* ////////// ASUNTO ////////// */}
                                    <div className="mb-3">
                                        <label className="mb-1">Asunto</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="asunto"
                                            id="asunto"
                                            value={formik.values.asunto}
                                            onChange={formik.handleChange}
                                            placeholder="Ingresá el asunto"
                                        />
                                        {formik.errors.asunto &&
                                            formik.touched.asunto && (
                                                <p className="mt-1">
                                                    {formik.errors.asunto}
                                                </p>
                                            )}
                                    </div>
                                </div>
                            </div>

                            {/* ////////// mensaje ////////// */}
                            <div className="mb-3">
                                <label className="mb-1">Mensaje</label>
                                <textarea
                                    className="form-control"
                                    type="textarea"
                                    rows="4"
                                    name="mensaje"
                                    id="text-area"
                                    value={formik.values.mensaje}
                                    onChange={formik.handleChange}
                                    placeholder="Ingresá tu observación"
                                />
                                {formik.errors.mensaje &&
                                    formik.touched.mensaje && (
                                        <p className="mt-1">
                                            {formik.errors.mensaje}
                                        </p>
                                    )}
                            </div>
                            {/* ////////////////// SUBMIT ////////////////// */}
                            <div>
                                <button type="submit">
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
