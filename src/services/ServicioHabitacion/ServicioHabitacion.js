

export async function ServicioHabitacion() {
  

        //.1 uri
        const URI='https://servercomfama.herokuapp.com/viajescomfama/habitaciones'

        //.2 CONFIGURO LA PETICION 
        const PETICION={
            method:'GET'
        }
        //3. CONSUMO
        let respuesta=await fetch(URI,PETICION)
        let datos =await respuesta.json()

        return datos
    
}