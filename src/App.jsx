import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"
import "./scss/main.scss"
import { Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Eventos from "./components/Eventos"
import Fechas from "./components/Fechas"
import Inicio from "./components/Inicio"
import Festival from "./components/Festival"
import Trabajos from "./components/Trabajos"
import Contacto from "./components/Contacto"
import Nosotros from "./components/Nosotros"
import Footer from "./components/Footer"
import Acreditacion from "./components/Acreditacion"
import AvisoLegal from "./components/AvisoLegal"
import PoliticaCookies from "./components/PoliticaCookies"
import PoliticaPrivacidad from "./components/PoliticaPrivacidad"
import CondicionesGenerales from "./components/CondicionesGenerales"

const App = () => {
    return (
        <>
            <Nav />
            <Routes>
                <Route index path="" element={<Festival />} />
                <Route path="eventos" element={<Eventos />} />
                <Route path="fechas" element={<Fechas />} />
                <Route path="inicio" element={<Inicio />} />
                <Route path="festival" element={<Festival />} />
                <Route path="nosotros" element={<Nosotros />} />
                <Route path="trabajos" element={<Trabajos />} />
                <Route path="contacto" element={<Contacto />} />
                <Route path="acreditacion" element={<Acreditacion />} />
                <Route path="avisoLegal" element={<AvisoLegal />} />
                <Route path="politicaCookies" element={<PoliticaCookies />} />
                <Route path="politicaPrivacidad" element={<PoliticaPrivacidad />} />
                <Route path="condicionesGenerales" element={<CondicionesGenerales />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
