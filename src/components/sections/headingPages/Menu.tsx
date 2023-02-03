import React from 'react';
import Carousel from '../carousel/MenuCarousel';
import GreekSalad from '../../../assets/food/greek-salad.webp';
import Bruschetta from '../../../assets/food/bruschetta.jpeg';
import LemonDessert from '../../../assets/food/lemon-dessert.webp';
import MenuCard from '../cardInfo/MenuCard';
import { MenuCardProps } from '../../../interface/queryfood';

const specials = [
  {
    image: GreekSalad,
    name: 'Greek Salad',
    price: '$12.99',
    description: 'Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil.'
  },
  {
    image: Bruschetta,
    name: 'Bruschetta',
    price: '$16.99',
    description: 'Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil.'
  },
  {
    image: LemonDessert,
    name: 'Lemon Dessert',
    price: '$8.50',
    description: 'Fresh baked lemon bread coated in salt and sugar. Powdered in citrus and lemon zest.'
  },
];

const Menu: React.FC<MenuCardProps> = () => {
  
    return (
        <section className="specials">
            <article className="specials-topbar">
                <h1>Especiales de esta semana</h1>
                <a className="action-button" href={require('../../../assets/menu.webp')} target="_blank" rel="noreferrer">Online Menu</a>
            </article>

            <section className="specials-cards">
                {specials.map(special => (
                    <MenuCard
                        // key={special.name}
                        image={special.image}
                        name={special.name}
                        price={special.price}
                        description={special.description}
                    />
                ))}
            </section>

            <section className="specials-carousel">
                <Carousel />
            </section>
        </section>
    );
}

export default Menu;
