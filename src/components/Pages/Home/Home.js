import React from 'react';
import SpecialFoodSlider from '../SpecialFoodSlider/SpecialFoodSlider';
import FoodTab from '../FoodTab/FoodTab';
import LatestFoodSlider from '../LatestFoodSlider/LatestFoodSlider';
import RoyalHomeSlider from '../../RoyalHomeSlider/RoyalHomeSlider';
import Footer from '../../Footer/Footer';



const Home = () => {
    return (
        <>
            <RoyalHomeSlider></RoyalHomeSlider>
            <main>
                <SpecialFoodSlider></SpecialFoodSlider>
                <LatestFoodSlider></LatestFoodSlider>
                <FoodTab></FoodTab>
                <Footer></Footer>
            </main>
        </>
    );
};

export default Home;