import somos1 from "../../assets/img/somos3.png"
import somos2 from "../../assets/img/somos2.png"
import somos3 from "../../assets/img/somos1.png"

import React from "react"

export const Nosotros = () => {
    return (
        <section
            className="page-section text-white mb-0 text-center"
            id="about"
        >
            {/*<!-- Imagen Nosotros-->*/}
            <div className="container">
                <div className="row row-nosotros">
                    {/*<!-- Nosotros Descripcion -->*/}
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

                <div className="row justify-content-center">
                    <div class="col-lg-3">
                        
                        <img
                                src={somos1}
                                alt={somos1}
                                id="somos1"
                                width={140}
                                height={140}
                        />
                        
                        <h4>Agustin</h4>
                        <p>
                            Fue conductor y productor de la radio, como así
                            también, productor de Rock Road (TV) un show con
                            Zeta Bosio (Soda Stereo), donde recorría festivales
                            en todo el mundo entrevistando artistas
                            internacionales.
                        </p>
                        <p>
                            Manager de Zeta Bosio (bajista de Soda Stereo) y
                            productor de varios proyectos musicales en
                            colaboración con otros artistas internaciones como
                            Paul Ouckefol, Hernan Cataneo, Martin Garcia y
                            Romina Cohn.
                        </p>
                        <p>
                            Representación de bandas, incluyendo Tours por el
                            Reino Unido (Londres, Liverpool, Manchester,
                            Sheffield y Chesterfield) con bandas argentinas y
                            otros artistas invitados como Reverend and the
                            Makers, Artic Monkeys, entre otros, grabando mas de
                            65 artistas independientes en el proceso como parte
                            de un proyecto cultural con el INCA, finalizando con
                            una producción en vivo en la BBC Radio6.
                        </p>
                        <p></p>
                        <p>agustin@2222agencia.com</p>
                    </div>
                    <div class="col-lg-3">

                        <img
                                src={somos2}
                                alt={somos2}
                                id="somos2"
                                width={140}
                                height={140}
                        />

                        <h4>Luciano</h4>
                        <p>
                            Experto en management de artistas, con 8 años de
                            experiencia en la industria musical. Comenzó
                            gestionado a uno de los mejores tecladistas del
                            mundo como Chucky de Ipola, quien formó parte de
                            bandas históricas como Los Piojos, Rata Blanca, La
                            Mississippi, Ratones Paranóicos, Guasones,
                            Intoxicados, Los Autenticos Decadentes, entre otras.
                        </p>
                        <p>
                            Desde entonces, conoció́ y trabajó con muchos
                            artistas donde se desempeñó́ como community manager,
                            tour manager, asistente de producción, productor
                            general y manager.
                        </p>
                        <p>
                            Trabajó en una de las productoras de eventos mas
                            importantes de Argentina, Pirca Producciones,
                            encargada de realizar los tours y producción de
                            shows a bandas como No te va gustar, Bersuit
                            Vergarabat, Cruzando el Charco, Los Perez Garcia,
                            Tan Bionica, Chano, Agarrate Catalina, Once Tiros,
                            entre otras.
                        </p>
                        <p>
                            De los shows mas destacados en los que trabajó, se
                            pueden mencionar los 10 Teatros Gran Rex
                            consecutivos de la banda uruguaya No te va gustar
                            presentando su disco "Otras canciones 25 años", el
                            festejo de los 30 años de Bersuit Vergarabat en el
                            Estadio Obras, los 7 Estadios Obras consecutivos de
                            No te va gustar, presentando su disco "Suenan las
                            alarmas", el Teatro Gran Rex de la murga uruguaya
                            Agarrate Catalina presentando su gira "Amor y odio",
                            y con su banda, Parientes, produjo el festejo del
                            aniversario de la ciudad de Junin, Buenos Aires,
                            para mas de 40 mil personas, entre otros.
                        </p>
                        <p>
                            Desde el 2016, es manager de la banda de Rock
                            Argentino, Parientes, la cual se ubica en los
                            primeros puestos de los charts argentinos y
                            latinoamericanos en radios.
                        </p>
                        <p></p>
                        <p>luciano@2222agencia.com</p>
                    </div>
                    <div class="col-lg-3">

                        <img
                                src={somos3}
                                alt={somos3}
                                id="somos3"
                                width={140}
                                height={140}
                        />


                        <h4>Jonathan (advisor)</h4>
                        <p>
                            Emprendedor con más de 15 años de experiencia en
                            desarrollo de nuevos negocios, tecnología y
                            estrategia. Es actualmente el Director Ejecutivo y
                            co-fundador de una startup de tecnología para la
                            industria aeronáutica, y su experiencia previa
                            incluye haber sido consultor en el Boston Consulting
                            Group, profesor de economía en la Universidad de
                            Harvard, director en una startup de tecnología, y
                            asesor de estrategia en el Programa Mundial de
                            Alimentación de las Naciones Unidas.
                        </p>
                        <p>
                            Jonathan es además ingeniero industrial, economista,
                            y MBA de la Universidad de Harvard.
                        </p>
                        <p></p>
                        <p>jonathan@2222agencia.com</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Nosotros
