import React from 'react';
import SpecialFoodSlider from '../SpecialFoodSlider/SpecialFoodSlider';
import FoodTab from '../FoodTab/FoodTab';
// import LatestFoodSlider from '../LatestFoodSlider/LatestFoodSlider';
import RoyalHomeSlider from '../../RoyalHomeSlider/RoyalHomeSlider';
import Footer from '../../Footer/Footer';
import Testimional from '../../Testimional/Testimional';
import Header from '../../Header/Header';
import FoodSlider from '../SpecialFoodSlider/FoodSlider';
 import Contact from '../../Contact/Contact';



const Home = () => {
    return (
        <>
            <Header></Header>
            <RoyalHomeSlider></RoyalHomeSlider>
            <main>
          
                <SpecialFoodSlider></SpecialFoodSlider>
                <FoodSlider />
                <FoodTab></FoodTab>
                <Testimional></Testimional>
                <Contact />
                <Footer></Footer>
            </main>
        </>
    );
};

export default Home;