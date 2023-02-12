import React from 'react';
import { Link } from 'react-router-dom';
import { PlatosCardProps } from '../../../interface/queryfood';

const PlatosCard: React.FC<PlatosCardProps> = (props) => {
    return (
      <article className="menu-card">
        <img src={props.imagen} alt="Special Menu"></img>
        <section className="menu-card-content">
          <h2>{props.nombre_plato}</h2>
          <p>{props.precio}</p>
          <p>{props.descripcion}</p>
          <p>Disponible:</p>
          <p>{saySomething(props.disponibilidad)}</p>
          <Link className="special-button" to="/twilioCalification">Contactar</Link>
        </section>
      </article>

      
    );
  };
  

export default PlatosCard;

function saySomething(arg0: boolean) {
  console.log('ingrese a say someting')
  if(arg0 === true)
    return '\u2705';
  return '\u274C'
  }
