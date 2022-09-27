import "./Home.css";
import { Formularioreserva } from "../Formulario/Formularioreserva.js";
import { ServicioHabitacion } from "../services/ServicioHabitacion/ServicioHabitacion.js";
import {Footer} from "../Footer/Footer.js";
import { useEffect, useState } from "react";
export function Home() {
  //usando el usestate : (function especial para crear vaiable global dentro del
  //componente)
  const [estadoCarga, setEstadoCarga] = useState(true);
  const [habitaciones, setHabitaciones] = useState(null);

  //usan ek useffect:funcion que controla el render(el pintado) de un componente
  useEffect(function () {
    ServicioHabitacion().then(function (respuesta) {
      setHabitaciones(respuesta);
      console.log(respuesta);
      setEstadoCarga(false);
    });
  }, []);

  if (estadoCarga) {
    return (
      <>
        <h1>estoy cargando</h1>
      </>
    );
  } else {
    return (
      <>
        <div className="banner">
          <Formularioreserva />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3"></div>
            <div className="col-12 col-md-8">
              <h1>HISTORIA</h1>
              <p>
                Medellín una ciudad que combina tradición, gastronomía, ciencias
                y naturaleza sigue consolidándose como líder en turismo
                nacional. Visitar sitios como Pueblito Paisa, Parque Explora,
                Jardín Botánico de Medellín, Parque Arví, la Plaza de Botero, el
                Museo de Antioquia, entre otros, además de su amplia oferta de
                comercio e innovación, han logrado consolidar a la conocida
                “tacita de plata” como uno de los destinos favoritos tanto de
                los colombianos como de extranjeros. A la vanguardia del
                crecimiento turístico de la ciudad ha estado el Hotel
                Intercontinental Medellín, propiedad de la cadena Movich Hotels,
                que este año celebra sus 50 años de historia. Ubicado a 20
                minutos del aeropuerto José María Córdova, con una estructura
                imponente e instalaciones que han celebrado cientos de eventos
                importantes a nivel nacional e internacional, el hotel es hoy
                uno de los preferidos por los viajeros en la ciudad. Al servicio
                de los visitantes, este ícono de la industria hotelera en la
                capital antioqueña que se ha ido renovando con el objetivo de
                satisfacer las necesidades de los usuarios que visitan la ciudad
                ya sea por turismo o negocios, realizó su reapertura desde el
                mes de octubre y desde ese momento cuenta con todas las medidas
                y protocolos de bioseguridad implementados. La asesoría
                personalizada y detallada para cada evento, toda su
                infraestructura robusta con servicios de gastronomía, spa,
                gimnasio y placa deportiva, están a la espera para recibir a
                todos aquellos que quieran disfrutar de un cambio de ambiente,
                una atención de primera y una ciudad encantadora.
              </p>
              <div className="row ">
                <div className="col-12 col-md-4">
                  <img
                    className="w-100 h-100   w-fluid"
                    src="https://firebasestorage.googleapis.com/v0/b/frontcomfamalc.appspot.com/o/habitacion4.jpg?alt=media&token=a4930a4b-9a24-4613-8dc0-c92b69161f9b"
                  ></img>
                </div>
                <div className="col-12 col-md-4">
                  <img
                    className="w-100 h-100  w-fluid"
                    src="https://firebasestorage.googleapis.com/v0/b/frontcomfamalc.appspot.com/o/habitacion1.jpg?alt=media&token=855a4bec-1354-4c39-b0fa-5eab39deff2d"
                  ></img>
                </div>
                <div className="col-12 col-md-4">
                  <img
                    className="w-100 h-100 w-fluid"
                    src="https://firebasestorage.googleapis.com/v0/b/frontcomfamalc.appspot.com/o/habitacion3.jpg?alt=media&token=69045f4b-bae7-444b-be64-9ef63f0a7ce1"
                  ></img>
                </div>
              </div>
              <br />
              <div className="row ">
                <div className="col-12 col-md-4">
                  <img
                    className="w-100 h-100  w-fluid"
                    src="https://firebasestorage.googleapis.com/v0/b/frontcomfamalc.appspot.com/o/habitacion4.jpg?alt=media&token=a4930a4b-9a24-4613-8dc0-c92b69161f9b"
                  ></img>
                </div>
                <div className="col-12 col-md-4">
                  <img
                    className="w-100 h-100  w-fluid"
                    src="https://firebasestorage.googleapis.com/v0/b/frontcomfamalc.appspot.com/o/habitacion1.jpg?alt=media&token=855a4bec-1354-4c39-b0fa-5eab39deff2d"
                  ></img>
                </div>
                <div className="col-12 col-md-4">
                  <img
                    className="w-100 h-100 w-fluid"
                    src="https://firebasestorage.googleapis.com/v0/b/frontcomfamalc.appspot.com/o/habitacion3.jpg?alt=media&token=69045f4b-bae7-444b-be64-9ef63f0a7ce1"
                  ></img>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <div>
          <div className="container-fluid p-5">
            <div className="row row-cols-1 row-cols-md-4 g-3">
              {habitaciones.datos.map(function (habitacion) {
                return (
                  // <div>
                  //     <h1>{habitacion.nombre}</h1>
                  //     <img src={habitacion.imagenes[0]}></img>
                  // </div>
                  <>
                    <div className="col-5">
                      <div class="card h-100">
                        <img
                          src={habitacion.imagenes[0]}
                          class="card-img-top"
                          alt="..."
                          height="350"
                        ></img>
                        <div class="card-body">
                          <h3>{habitacion.nombre}</h3>
                          <h1>${habitacion.valorNoche}</h1>
                          <p class="card-text">{habitacion.descripcion}</p>
                          <button className="btn btn-info w-100">
                            Reservar
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <Footer/>
          </div>
         
        </div>
        
      </>
    );
  }


}
