import { BotonOpciones } from "../components/btn-opciones/BotonOpciones"
import { Footer } from "../components/footer/Footer"
import { InfoHome } from "../components/info-home/InfoHome"
import { Navbar } from "../components/navbar/Navbar"

export const Home = () => {
  return (
    <>
        <div className="vh-100 d-flex flex-column justify-content-between">
            <div>
              <Navbar/>
              <InfoHome/>
            </div>
            <div className="d-flex flex-column">
              <BotonOpciones/>
              <Footer/>
            </div>
        </div>
    </>
  )
}
