import { ServicioHabitacion } from "../services/ServicioHabitacion/ServicioHabitacion.js"
import { useEffect, useState } from "react";//hooks


export function Habitaciones() {
    //usando el usestate (funcion especial para crear variables globales dentro del componente )

    const [estadoCarga, setEstadoCarga] = useState(true)
    const [habitaciones, setHabitaciones] = useState(null)

    //usuando el useeffect
    //funcion que controla el render (el pintado)del conponente
    useEffect(function () {
        ServicioHabitacion()
            .then(function (respuesta) {
                setHabitaciones(respuesta)
                setEstadoCarga(false)
            })

    }, [])
    //evaluar la carga para rendizar respuesta

    if (estadoCarga) {
        <>
        <h1>estoy cargando...</h1>
        
        </>
        
    }else{
        return(
            //accediendo a la logica de js 
            <div>
                {
                    habitaciones.datos.map(function(habitacion){
                        return(
                            <div>
                                <h1>{habitacion.nombre}</h1>
                                <img src={habitacion.imagenes[0]}></img>
                            </div>
                        )
                    })
                }
            </div>
        )
    }



   
}