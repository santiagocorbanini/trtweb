import { useFormik } from "formik"
import Select from "react-select"
import * as Yup from "yup"
import {
    acreditacionesOptions,
    freelanceOptions,
    customStyles,
} from "./options"
import enviarSolicitud from "../../assets/img/enviarSolicitud.svg"

export default function AcreditacionTest(props) {
    const { setFieldValue, setFieldTouched } = props
    const formik = useFormik({
        initialValues: {
            name: "",
            medioDeComunicacion: "",
            email: "",
            acreditacion: "",
            freelance: "",
            redesSociales: "",
            concierto: "",
            observaciones: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, "Minimo 2 caracteres")
                .max(15, "Maximo 15 caracteres")
                .required("El nombre es requerido"),
            medioDeComunicacion: Yup.string().required(
                "El medio de comunicación es requerido"
            ),
            email: Yup.string()
                .email("Formato de email inválido")
                .required("El email es requerido"),
            acreditacion: Yup.string().required("Acreditación es requerido"),
            freelance: Yup.string().required("Eres Freelancer es requerido"),
            redesSociales: Yup.string().required("Redes Sociales es requerido"),
            concierto: Yup.string().required("Un concierto es requerido"),
            observaciones: Yup.string(),
        }),
        onSubmit: (values) => {
            console.log(values)
        },
    })

    return (
        <section className="page-section" id="contact">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-xl-7 d-flex justify-content-between">
                        <div className="col-5">
                            <span className="texto-info">
                                Si perteneces a algún medio de comunicación o te
                                dedicas al mundo de la comunicación,{" "}
                                <strong>ya puedes solicitarlo.</strong>
                            </span>
                        </div>
                        <div className="col-2"></div>
                        <div className="col-5">
                            <h3 className="text-right">
                                OBTÉN NUESTRO PASE DE PRENSA Y CUBRE NUESTROS
                                EVENTOS.
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-xl-7">
                    <div className="mt-4 mb-4">
                                <hr />
                            </div>
                        <form onSubmit={formik.handleSubmit} id="contactForm">
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
                                {formik.errors.name && formik.touched.name && (
                                    <p className="mt-1">{formik.errors.name}</p>
                                )}
                            </div>
                            {/* ////////// MEDIO DE COMUNICACION ////////// */}
                            <div className="mb-3">
                                <label className="mb-1">
                                    Medio de Comunicación
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="medioDeComunicacion"
                                    id="medioDeComunicacion"
                                    value={formik.values.medioDeComunicacion}
                                    onChange={formik.handleChange}
                                    placeholder="Ingresá un Medio de Comunicación"
                                />
                                {formik.errors.medioDeComunicacion &&
                                    formik.touched.medioDeComunicacion && (
                                        <p className="mt-1">
                                            {formik.errors.medioDeComunicacion}
                                        </p>
                                    )}
                            </div>
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
                            {/* ////////// ACREDITACION ////////// */}
                            <div className="mb-3">
                                <label className="mb-1">
                                    Tipo de acreditación
                                </label>
                                <Select
                                    styles={customStyles}
                                    placeholder="-- Selecciona --"
                                    id="acreditacion"
                                    name="acreditacion"
                                    value={setFieldValue}
                                    options={acreditacionesOptions}
                                    onChange={(selectedOption) =>
                                        formik.setFieldValue(
                                            "acreditacion",
                                            selectedOption.value
                                        )
                                    }
                                    onBlur={setFieldTouched}
                                />
                                {formik.errors.acreditacion &&
                                    formik.touched.acreditacion && (
                                        <p className="mt-1">
                                            {formik.errors.acreditacion}
                                        </p>
                                    )}
                            </div>
                            {/* ////////// FREELANCE ////////// */}
                            <div className="mb-3">
                                <label className="mb-1">
                                    ¿Eres Freelancer?
                                </label>
                                <Select
                                    styles={customStyles}
                                    placeholder="-- Selecciona --"
                                    id="freelance"
                                    name="freelance"
                                    value={setFieldValue}
                                    options={freelanceOptions}
                                    onChange={(selectedOption) =>
                                        formik.setFieldValue(
                                            "freelance",
                                            selectedOption.value
                                        )
                                    }
                                    onBlur={setFieldTouched}
                                />
                                {formik.errors.freelance &&
                                    formik.touched.freelance && (
                                        <p className="mt-1">
                                            {formik.errors.freelance}
                                        </p>
                                    )}
                            </div>
                            {/* ////////// REDES SOCIALES ////////// */}
                            <div className="mb-3">
                                <label className="mb-1">
                                    Déjanos tu web y/o redes sociales
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="redesSociales"
                                    id="redesSociales"
                                    value={formik.values.redesSociales}
                                    onChange={formik.handleChange}
                                    placeholder="Ingresá tus redes sociales"
                                />
                                {formik.errors.redesSociales &&
                                    formik.touched.redesSociales && (
                                        <p className="mt-1">
                                            {formik.errors.redesSociales}
                                        </p>
                                    )}
                            </div>
                            {/* ////////// CONCIERTO ////////// */}
                            <div className="mb-3">
                                <label className="mb-1">
                                    A qué concierto estás interesado/a acudir?
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="concierto"
                                    id="concierto"
                                    value={formik.values.concierto}
                                    onChange={formik.handleChange}
                                    placeholder="Ingresá un concierto"
                                />
                                {formik.errors.concierto &&
                                    formik.touched.concierto && (
                                        <p className="mt-1">
                                            {formik.errors.concierto}
                                        </p>
                                    )}
                            </div>
                            {/* ////////// OBSERVACIONES ////////// */}
                            <div className="mb-3">
                                <label className="mb-1">Observaciones</label>
                                <textarea
                                    className="form-control"
                                    type="textarea"
                                    rows="4"
                                    name="observaciones"
                                    id="text-area"
                                    value={formik.values.observaciones}
                                    onChange={formik.handleChange}
                                    placeholder="Ingresá tu observación"
                                />
                                {formik.errors.observaciones &&
                                    formik.touched.observaciones && (
                                        <p className="mt-1">
                                            {formik.errors.observaciones}
                                        </p>
                                    )}
                            </div>
                            {/* ////////////////// SUBMIT ////////////////// */}
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
