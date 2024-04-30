import { MdOutlineBalance } from 'react-icons/md';
import './estadistica-home.css';
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";




export const EstadisticaHome = () => {
  return (
    <>
        <div className='container shadow p-5'>
            <ul className='list-group'>
                <li className='text-success list-group-item d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <FaLongArrowAltUp />
                        <h3 className='small'>Ingresos</h3>
                    </div>
                    <p>$ 1.000.000</p>
                </li>
                <li className='text-danger list-group-item d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <FaLongArrowAltDown />
                        <h3 className='small'>Gastos</h3>
                    </div>
                    <p>$ 500.000</p>
                </li>
                <li className='list-group-item d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <MdOutlineBalance />
                        <h3 className='small'>Balance</h3>
                    </div>
                    <p>$ 500.000</p>
                </li>
            </ul>
            <button className="gestionar-cuentas btn col-12">Gestionar Cuentas</button>
        </div>
    </>
  )
}
