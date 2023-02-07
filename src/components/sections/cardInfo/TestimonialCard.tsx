import React from 'react';
import Star from '../../../assets/star.png'
import { TestimonialCardProps } from '../../../interface/queryfood';

const TestimonialCard: React.FC<TestimonialCardProps> = (props) => {
    return (
        <article className="testimonial-card">
            <img src={Star} alt="delivery Icon"></img>
            <h3>{props.calificacion}</h3>
            <p>{props.comentario}</p>
        </article>
    );
};

export default TestimonialCard;



