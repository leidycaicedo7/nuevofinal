import { Routes, Route, Link } from "react-router-dom";
import './Menu.css'
export function Menu (){
    return(
        <nav className="navbar navbar-expand-lg menu navbar-dark fixed-top">
            <div className="container-fluid">
             <Link className="navbar-brand" to="/">HOME</Link>
                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                 </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/habitaciones">Habitaciones</Link>
                    </li>
                    
                </ul>
            </div>
            </div>
        </nav>
    )
}