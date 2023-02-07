import React, { useEffect, useState } from 'react';
import TestimonialCard from '../cardInfo/TestimonialCard';
import Carousel from "../carousel/TestimonialCarousel";
import { TestimonialCardProps , Comment} from '../../../interface/queryfood';

const testimonials = [
  { calificacion: 5, comentario: "This is the best Mediterranean food that I've ever had!" },
  { calificacion: 5, comentario: "My Shiba Inu, Mugi, really loved the cozy vibes and delicious food here." },
  { calificacion: 5, comentario: "I've had some great Mediterranean food before, but none of them beats Little Lemon in flavor and texture." },
  { calificacion: 5, comentario: "Great food, welcoming staff, cozy atmosphere. A great place to treat your kids to." },
  { calificacion: 5, comentario: "The food here really refreshed me after a late night shift at the local supply depot." },
  { calificacion: 5, comentario: "I came to Little Lemon after a 5 hour flight from the East Coast. The food here tasted so delicious after the trip here." },
  { calificacion: 5, comentario: "The food here was fire!! Everyone should try this place out at least once if they live in Chicago." },
  { calificacion: 5, comentario: "This restaurant served as a perfect dinner for me after a long night of studying. I would definitely order from here again!" }

];




const Testimonials: React.FC<TestimonialCardProps> = () => {
  const url = "https://restaurantes-mu.vercel.app/comentarios"
  const [ todos, setTodos] = useState<Comment[]>()
  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json() as Comment[]
    setTodos(responseJSON)
    return responseJSON
  }
  useEffect(() => {
    fetchApi()
  }, [])
  return (
    <>
    <article className="testimonials">
     <article className="testimonials-topbar">
          <h1>Testimonials de Comentarios de uso</h1>
        </article>
      <section className="testimonials-cards">
        {!todos || !Array.isArray(todos) ? 'Cargando...' : todos.map(({ calificacion, comentario }: Comment) => (
          <TestimonialCard calificacion={calificacion} comentario={comentario} />
      ))}
      </section>

    </article>
   
    <section className="testimonials">
        <article className="testimonials-topbar">
          <h1>Testimonials</h1>
        </article>

        <section className="testimonials-cards">
          {testimonials.map(({ calificacion, comentario }) => (
            <TestimonialCard calificacion={calificacion} comentario={comentario} />
          ))}

        </section>

        <section className="testimonials-carousel">
          <Carousel />
        </section>

      </section></>
  );
};

export default Testimonials;
 
