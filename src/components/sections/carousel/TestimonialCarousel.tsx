import React from "react";
import { Carousel } from "react-responsive-carousel";
import TestimonialCard from "../cardInfo/TestimonialCard";

function CarouselPage()  {
    return (
        <Carousel 
            infiniteLoop={true} 
            autoPlay={true} 
            interval={5000} 
            showStatus={false}
        >
           
           <TestimonialCard calificacion={5} comentario="This is the best Mediterranean food that I've ever had!"/>
            <TestimonialCard calificacion={5}  comentario="My Shiba Inu, Mugi, really loved the cozy vibes and 
                delicious food here."/>
            <TestimonialCard calificacion={5}  comentario="I've had some great Mediterranean food before, but none of them beats
             Little Lemon in flavor and texture."/>
            <TestimonialCard calificacion={5}  comentario="Great food, welcoming staff, cozy atmosphere. A great place to 
                treat your kids to."/>
            <TestimonialCard calificacion={5}  comentario="The food here really refreshed me after a late night shift
                at the local supply depot."/>
            <TestimonialCard calificacion={5}  comentario="I came to Little Lemon after a 5 hour flight from the East Coast.
                 The food here tasted so delicious after the trip here."/>
            <TestimonialCard calificacion={5}  comentario="The food here was fire!! Everyone should try this place
                 out at least once if they live in Chicago."/>
            <TestimonialCard calificacion={5}  comentario="This restaurant served as a perfect dinner for me after a 
                long night of studying. I would definitely order from here again!"/>
        </Carousel>
    );
};


export default CarouselPage;
