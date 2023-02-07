import React from 'react';
//import { Link } from 'react-router-dom';
 
const Heading: React.FC = () => {
  return (
    <header>
      <article className="call-to-action">
        <section className="hero-text">
          <h1>QueryFood</h1>
          <h2>Lima-Perú</h2>
          <p className="subsection">"Comida a tiempo real, con QueryFood."</p>
          <br />
          {/* <Link className="action-button" to="/reservations">Consultar reserva </Link> */}
        </section>

        <section className="hero-image">
          <img src={require('../../../assets/food/food1.png')} alt="Little Lemon restaurant cuisine"></img>
        </section>
      </article>
    </header>
  );
};

export default Heading;
