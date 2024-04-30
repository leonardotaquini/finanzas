import { Link } from "react-router-dom"
import { FaRegUser } from "react-icons/fa";
import './navbar.css';

export const Navbar = () => {
  return (
    <>
        <nav className="nav py-3 d-flex justify-content-between align-items-center shadow">

            <Link to={'/'} className=" px-2 text-decoration-none">Finanzas</Link>

            <div className="d-flex px-3 justify-content-around align-items-center ">

                <div className="nav-item dropdown ">                
                    <Link to={'/'} className="btn-mes nav-link dropdown-toggle rounded shadow mes" data-bs-toggle="dropdown" role="button" aria-expanded="false">
                        mar. 2024
                    </Link>
                    <ul className="dropdown-menu">
                        <li><Link to={'/'} className="dropdown-item">Enero</Link></li>
                        <li><Link to={'/'} className="dropdown-item">Febrero</Link></li>
                        <li><Link to={'/'} className="dropdown-item">Marzo</Link></li>
                    </ul>
                </div>

                <div className="nav-item dropdown mx-2">
                    <Link to={'/'} className="nav-link dropdown-toggle " data-bs-toggle="dropdown" role="button" aria-expanded="false">
                        <FaRegUser />
                    </Link>
                    <ul className="dropdown-menu">
                        <li><Link to={'/'} className="dropdown-item">Gastos</Link></li>
                        <li><Link to={'/'} className="dropdown-item">Ingresos</Link></li>
                        <li><Link to={'/'} className="dropdown-item">Balance</Link></li>
                    </ul>
                </div>

            </div>
        </nav>
    </>
  )
}
