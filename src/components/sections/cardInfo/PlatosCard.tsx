import React from 'react';
import { Link } from 'react-router-dom';
import { PlatosCardProps } from '../../../interface/queryfood';

const PlatosCard: React.FC<PlatosCardProps> = (props) => {
    return (
      <article className="menu-card">
        <img src={props.imagen} alt="Special Menu"></img>
        <section className="menu-card-content">
          <h1>{props.nombre_plato}</h1>
          <h3>{props.precio}</h3>
          <h3>{props.descripcion}</h3>
          <h3>Disponible:</h3>
          <h3>{saySomething(props.disponibilidad)}</h3>
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
