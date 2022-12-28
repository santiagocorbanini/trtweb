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
              <p className="px-2 text-left nosotrosTexto">
                <strong>
                  TRT Producciones nace en Málaga en febrero de 2019.
                </strong>
              </p>
              <p className="px-2 text-left nosotrosTexto">
                <strong>
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
                </strong>
              </p>
              <p className="px-2 text-left nosotrosTexto">
                <strong>
                  <br />
                  En 2022 realizamos:
                  <br />
                  <br />* Maria Becerra (Gira España)
                  <br />* Fundamentalistas del aire acondicionado (Gira España)
                  <br />* Ciro y Los Persas (Gira España)
                  <br />* Los Totora Maikel de la calle (Gira España)
                  <br />* Vilma Palma e Vampiros (Barcelona)
                  <br />* Cruzando el charco (Gira España)
                  <br />
                  <br />
                  En 2023:
                  <br />
                  <br />* “Dale! Argentina Festival” (Barcelona, Madrid,
                  Mallorca)
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
