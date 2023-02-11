import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import GreekSalad from '../../../assets/food/greek-salad.webp';
import Bruschetta from '../../../assets/food/bruschetta.jpeg';
import LemonDessert from '../../../assets/food/lemon-dessert.webp';
import PlatosCard from '../cardInfo/PlatosCard';


function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} interval={5000} showStatus={false}>
            <PlatosCard imagen="" nombre_plato="" precio={0.0} descripcion= "" disponibilidad={false}/>
            <PlatosCard imagen="" nombre_plato="" precio={0.0} descripcion='' disponibilidad={false}/>
        
        </Carousel>
    );
};

export default CarouselPage;