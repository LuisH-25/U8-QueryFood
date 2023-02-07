import React, { useEffect, useState } from 'react';
import Carousel from '../carousel/RestaurantCarousel';
import GreekSalad from '../../../assets/food/greek-salad.webp';
import Bruschetta from '../../../assets/food/bruschetta.jpeg';
import LemonDessert from '../../../assets/food/lemon-dessert.webp';
import RestaurandCard from '../cardInfo/RestaurantCard';
import { RestaurantCardProps,Restaurant } from '../../../interface/queryfood';

const listRestaurants = [
  {
    image: GreekSalad,
    name: 'Restaurante Greek Salad',
    calification: 5,
    description: 'Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil.'
  },
  {
    image: Bruschetta,
    name: 'Restaurant Bruschetta',
    calification: 3,
    description: 'Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil.'
  },
  {
    image: LemonDessert,
    name: 'Restaurant Lemon Dessert',
    calification: 4,
    description: 'Fresh baked lemon bread coated in salt and sugar. Powdered in citrus and lemon zest.'
  },
];


const Restaurants: React.FC<RestaurantCardProps> = () => {
  const url = "https://restaurantes-mu.vercel.app/restaurante"
  const [ todos, setTodos] = useState<Restaurant[]>()
  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json() as Restaurant[]
    setTodos(responseJSON)
    return responseJSON
  }
  useEffect(() => {
    fetchApi()
  }, [])
  
    return (
        <section className="specials">
            <article className="specials-topbar">
                <h1>Lista de Restaurantes</h1>
                {/* <a className="action-button" href={require('../../../assets/menu.webp')} target="_blank" rel="noreferrer">Lista de Restaurantes</a> */}
            </article>

            <section className="specials-cards">
            {!todos || !Array.isArray(todos) ? 'Cargando...' : todos.map(({ nombre, descripcion }: Restaurant) => (
              <RestaurandCard nombre={nombre} descripcion={descripcion} />
          ))}
            </section>

            <section className="specials-carousel">
                <Carousel />
            </section>
        </section>
    );
}

export default Restaurants;