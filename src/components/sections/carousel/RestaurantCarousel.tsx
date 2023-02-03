import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import GreekSalad from '../../../assets/food/greek-salad.webp';
import Bruschetta from '../../../assets/food/bruschetta.jpeg';
import LemonDessert from '../../../assets/food/lemon-dessert.webp';
import RestaurandCard from '../cardInfo/RestaurantCard';
//import { MenuCardProps } from '../../../interface/queryfood';


function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} interval={5000} showStatus={false}>
            <RestaurandCard image={GreekSalad} name="Restaurant Greek Salad" calification={5}description="Feta Cheese, tomato, lettuce"/>
            <RestaurandCard image={Bruschetta} name="Restaurant Bruschetta" calification={3} description="Bread, mango, green onions"/>
            <RestaurandCard image={LemonDessert} name="Restaurant Lemon Dessert" calification={4} description="Lemon bread, vanilla Icing"/>
        </Carousel>
    );
};

export default CarouselPage;