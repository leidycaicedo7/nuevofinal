import { ServicioHabitacion } from "../services/ServicioHabitacion/ServicioHabitacion.js"
import { useEffect,useState} from "react"
export function Habitaciones() {

    //usando el usestate : (function especial para crear vaiable global dentro del 
    //componente)
    const [estadoCarga, setEstadoCarga]=useState(true)
    const [habitaciones,setHabitaciones]=useState(null)

    //usan ek useffect:funcion que controla el render(el pintado) de un componente
    useEffect(function(){
        ServicioHabitacion()    
        .then (function (respuesta){
            
            setHabitaciones(respuesta)
            console.log(respuesta)
            setEstadoCarga(false)
        })
    },[])

    //evaluando la carga para renderizar respuesta
    if (estadoCarga){
        return(
            <>
                <h1>estoy cargando</h1>
            </>
        )
    }  
    else{
        return(

            <div>
                <div className="container-fluid p-5">
                    <div className="row row-cols-1 row-cols-md-2 g-5">
                        {
                            habitaciones.datos.map(function(habitacion){

                                return(
                                    // <div>
                                    //     <h1>{habitacion.nombre}</h1>
                                    //     <img src={habitacion.imagenes[0]}></img>
                                    // </div>
                                    <>
                                        <div className="col-5">
                                            <div class="card h-100">
                                                <img src={habitacion.imagenes[0]} class="card-img-top" alt="..."></img>
                                                <div class="card-body">
                                                    <h1>{habitacion.nombre}</h1>
                                                    <p class="card-text">{habitacion.descripcion}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>

                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }




   
}