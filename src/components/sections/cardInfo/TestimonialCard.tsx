import React from 'react';
import Star from '../../../assets/star.png'
import { TestimonialCardProps } from '../../../interface/queryfood';

const TestimonialCard: React.FC<TestimonialCardProps> = (props) => {
    return (
        <article className="testimonial-card">
            <img src={Star} alt="delivery Icon"></img>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </article>
    );
};

export default TestimonialCard;



