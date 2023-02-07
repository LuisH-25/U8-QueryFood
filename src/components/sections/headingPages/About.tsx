import React from "react";
import { AboutProps } from "../../../interface/queryfood";

const About: React.FC<AboutProps> = () => {
    return (
        <article className="about-us">
            <section className="hero-text">
                <h1>QueryFood</h1>
                <h2>Misión</h2>
                <p className="about-subtext">" QueryFood nace con la misión de solucionar un problema común 
                en la compra de comida: <b><p>¿Cómo saber si aún hay disponibilidad del menú que deseamos antes de hacer una larga cola?</p></b>  
                Para resolver esta incertidumbre, hemos creado QueryFood, una innovadora aplicación que le brinda al usuario 
                la capacidad de verificar en tiempo real el stock disponible de su plato favorito, evitando así malgastar su tiempo en esperas innecesarias." </p>
            </section> 
            

            <section className="double-image">
                <img className="about-1" src={require('../../../assets/food/food3.jpeg')} alt="Little Lemon restaurant cuisine 1"></img>
                <img className="about-2" src={require('../../../assets/food/food2.jpeg')} alt="Little Lemon restaurant cuisine 2"></img>
            </section>
    </article>
    );
}

export default About;