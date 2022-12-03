const Convocatoria = () => {
    return (
        <section
            className="page-section text-white mb-0 text-center"
            id="convocatoria"
        >
            <div className="container d-flex align-items-center justify-content-center mb-4">
                <h2>Convocatoria de bandas</h2>
            </div>

            <div className="container">
                <p className="px-2 text-center">
                    Buscamos bandas o solistas independientes para importante
                    proyecto musical.
                </p>
                <p className="px-2 text-center">
                    No importa de que parte del mundo seas, envianos tu info
                    entrando al link.
                </p>
            </div>
            <button
                className="btn btn-convocatoria btn-xl"
                id="submitConvocatoria"
                type="submit"
                onClick={() => {
                    window.open(
                        "https://docs.google.com/forms/d/1aAyUGXDJLOVD8ADqXsVkYU5GgLlrbG1VgjRKr5UA308/edit",
                        "_blank"
                    )
                }}
            >
                link de registro
            </button>
        </section>
    )
}

export default Convocatoria
