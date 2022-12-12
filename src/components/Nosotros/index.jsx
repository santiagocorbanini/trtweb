import React from "react"

export const Nosotros = () => {
    return (
        <section
            className="page-section text-white mb-0 text-center"
            id="about"
        >
            {/*<!-- Imagen nosotros-->*/}
            <div className="container">
                <div className="row row-nosotros">
                    {/*<!-- nosotros Descripcion -->*/}
                    <div className="nosotros">
                        <div>
                            <p className="px-2 text-center">
                                22:22 es el puente artístico entre Latinoamérica
                                y Europa, con más de 30 años de experiencia
                                combinada en management de artistas de primera
                                línea, descubrimiento y desarrollo de artistas
                                independientes, y organización de eventos
                                musicales (desde festivales independientes hasta
                                estadios masivos).
                            </p>
                            <p className="px-2 text-center">
                                Nos enfocamos en descubrir y desarrollar
                                talentos emergentes (acompañándolos en el
                                desarrollo artístico y personal), y en la
                                organización de eventos musicales en España y
                                Europa, apalancando nuestro portfolio de
                                talentos y nuestros contactos con artistas
                                consagrados en Latinoamérica.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Nosotros
