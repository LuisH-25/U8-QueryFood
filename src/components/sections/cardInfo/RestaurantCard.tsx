import React from 'react';
import { Link } from 'react-router-dom';
import { RestaurantCardProps } from '../../../interface/queryfood';

const RestaurandCard: React.FC<RestaurantCardProps> = (props) => {
    return (
      <article className="menu-card">
        <img src={props.image} alt="Special Menu"></img>
        <section className="menu-card-content">
          <h1>{props.name}</h1>
          <h3>{props.calification} </h3>
          <p>{props.description}</p>
          <Link className="special-button" to="/verMenu">Ver Menu</Link>
        </section>
      </article>
    );
  };
  

export default RestaurandCard;