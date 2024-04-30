import { BsFillBarChartLineFill } from "react-icons/bs"
import { FaListUl } from "react-icons/fa"
import { TbCategoryPlus } from "react-icons/tb"

export const Footer = () => {
  return (
    <>
        <footer className="footer d-flex align-items-center justify-content-center shadow py-3">
            <button className="btn d-flex flex-column justify-content-center align-items-center">
            <FaListUl />
            <h5 className="small">Transacciones</h5>
            </button>

            <button className="btn d-flex flex-column justify-content-center align-items-center">
             <BsFillBarChartLineFill />
             <h5 className="small">Informes</h5>
            </button>
            <button className="btn d-flex flex-column justify-content-center align-items-center">
                <TbCategoryPlus />
                <h5 className="small">Categorias</h5>
            </button>
        </footer>
    </>
  )
}
