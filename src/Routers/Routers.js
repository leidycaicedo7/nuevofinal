import { Routes, Route, Link } from "react-router-dom";
import {Home} from '../Home/Home.js'
import {Habitaciones} from '../Habitaciones/Habitaciones.js'
import{Menu} from '../Menu/Menu.js'
export function Routers() {
//en el archibo de rutas se importa todos los componentes 
    return (
        <div>
          <Menu/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="habitaciones" element={<Habitaciones />} />
          </Routes>
        </div>
      );
    
}