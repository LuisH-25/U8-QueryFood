import React from 'react';
import { Link } from 'react-router-dom';
import { RestaurantCardProps } from '../../../interface/queryfood';

const RestaurandCard: React.FC<RestaurantCardProps> = (props) => {
    return (
      <article className="menu-card">
        {/* <img src={props.image} alt="Special Menu"></img> */}
        <section className="menu-card-content">
          <h1>{props.nombre}</h1>
          {/* <h3>{props.calification} </h3> */}
          <p>{props.descripcion}</p>
          <Link className="special-button" to="/verPlatos">Ver Menu</Link>
        </section>
      </article>
    );
  };
  

export default RestaurandCard;