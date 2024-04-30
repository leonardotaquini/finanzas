import { EstadisticaHome } from "../estadistica-home/EstadisticaHome"
import { Saldo } from "../saldo/Saldo"

export const InfoHome = () => {
  return (
    <>
        <section className="col-12 col-sm-8 col-lg-8 m-auto">
          <Saldo/>
          <EstadisticaHome/>
        </section>
    </>
  )
}
