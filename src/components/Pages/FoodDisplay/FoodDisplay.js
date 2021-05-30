import React from 'react';
import { useSelector } from 'react-redux';
import FoodCard from '../FoodCard/FoodCard';

const FoodDisplay = ({ tab }) => {

    const {products} = useSelector(state => state.product);
    console.log(`products ==>>`, products)


    const queryFood= products.filter(foodItem => foodItem.category.toLowerCase() === tab.toLowerCase())
 
    return (
        <div className="row">
            {
                queryFood.length > 0 ? 
                queryFood.slice(0,6).reverse().map((item,index) => <FoodCard key={index} item={item}></FoodCard>)
                : <h3>Loading........</h3>
            }
        </div>
    );
};

export default FoodDisplay;