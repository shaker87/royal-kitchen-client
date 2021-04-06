import React from 'react';
// import { useState } from 'react';
import { foods } from '../../../FoodData/FoodData';
import FoodCard from '../FoodCard/FoodCard';

const FoodDisplay = ({ tab }) => {
    const foodItem = foods;
    // const [food, setFood] = useState([])

    const queryFood= foodItem.filter(foodItem => foodItem.category.toLowerCase() === tab.toLowerCase())
    // setFood(queryFood)
    // console.log(queryFood)
    
    // console.log(food)
    return (
        <div className="row">
            {
                queryFood.length > 0 ? 
                queryFood.slice(0,6).map((item) => <FoodCard item={item}></FoodCard>)
                : <h3>Loading........</h3>
            }
        </div>
    );
};

export default FoodDisplay;