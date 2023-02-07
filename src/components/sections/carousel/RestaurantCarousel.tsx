import React from 'react';
import { Carousel } from 'react-responsive-carousel';
// import GreekSalad from '../../../assets/food/greek-salad.webp';
// import Bruschetta from '../../../assets/food/bruschetta.jpeg';
// import LemonDessert from '../../../assets/food/lemon-dessert.webp';
import RestaurandCard from '../cardInfo/RestaurantCard';
//import { MenuCardProps } from '../../../interface/queryfood';


function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} interval={5000} showStatus={false}>
            <RestaurandCard nombre="Restaurant Greek Salad" descripcion="Feta Cheese, tomato, lettuce"/>
            <RestaurandCard nombre="Restaurant Bruschetta" descripcion="Bread, mango, green onions"/>
            <RestaurandCard nombre="Restaurant Lemon Dessert" descripcion="Lemon bread, vanilla Icing"/>
        </Carousel>
    );
};

export default CarouselPage;