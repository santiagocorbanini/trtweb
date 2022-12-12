import React from "react";

export const Nosotros = () => {
  return (
    <section className="page-section text-white mb-0 text-center" id="about">
      {/*<!-- Imagen nosotros-->*/}
      <div className="container">
        <div className="row row-nosotros">
          {/*<!-- nosotros Descripcion -->*/}
          <div className="nosotros">
            <div>
              <p className="px-2 text-center nosotrosTexto">
                <strong>
                  {/* 22:22 es el puente artístico entre Latinoamérica
                                y Europa, con más de 30 años de experiencia
                                combinada en management de artistas de primera
                                línea, descubrimiento y desarrollo de artistas
                                independientes, y organización de eventos
                                musicales (desde festivales independientes hasta
                                estadios masivos). */}
                  TRT Producciones nace en Málaga en febrero de 2019.
                </strong>
              </p>
              <p className="px-2 text-center nosotrosTexto">
                <strong>
                  {/* Nos enfocamos en descubrir y desarrollar
                                talentos emergentes (acompañándolos en el
                                desarrollo artístico y personal), y en la
                                organización de eventos musicales en España y
                                Europa, apalancando nuestro portfolio de
                                talentos y nuestros contactos con artistas
                                consagrados en Latinoamérica. */}
                  Somos una promotora de eventos que comienza realizando shows
                  en distintas salas de la ciudad de Málaga y alrededores hasta
                  que comenzamos a colaborar en producciones de giras de
                  artistas de renombre como Rauw Alejandro, Eladio Carrión, Ciro
                  y Los Persas, Los fundamentalistas del aire acondicionado,
                  entre otros. Después de estas colaboraciones, comenzamos a
                  establecernos y a realizar giras y festivales de producción
                  propia como las giras por España a Los fundamentalistas del
                  Aire acondicionado, Guasones, Los Totora, Cruzando el Charco,
                  Ciro y los Persas, entre otras, en ciudades como Barcelona,
                  Madrid, Valencia, Mallorca, Alicante y Málaga. <br />
                  <br /> En 2022 realizamos <br /> <br />
                  Gira España Maria Becerra <br /> Gira España Fundamentalistas
                  del aire acondicionado <br />
                  Gira España Ciro y Los Persas <br />
                  Gira España Los Totora Maikel de la calle (Alhaurín de la
                  torre) <br />
                  Vilma Palma e Vampiros (Barcelona) <br />
                  Gira España Cruzando el charco 2023 <br />
                  “Dale! Argentina Festival” (Barcelona, Madrid, Mallorca)
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
