import React from 'react';
import './LatestFoodSlider.css'
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { foods } from '../../../FoodData/FoodData';
import Slider from 'react-slick';

const LatestFoodSlider = () => {
    const food = foods;
    var settings = {
        autoPlay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 6
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 6
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 6
                }
            }
        ]
    };

    
    return (
        <div className="container">
            <div className="clearfix mt-2">
                <h4 className="float-left">Royal Latest</h4>
                <Link className="float-right text-uppercase" to="/">
                    See all
                </Link>
            </div>
            <Slider {...settings}>
                {
                    food.reverse().slice(0, 10).map(fd => {
                        return (
                            <>
                                <Link to={`/`}>
                                    <div className="col">
                                        <div className="card">
                                            <div className="card-img-top">
                                                <img style={{ width: '260px', height: '260px', objectFit: 'cover', margin: '12px' }} src={fd.image} alt={fd.image} />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </>
                        );
                    })
                }
            </Slider>
        </div>
    );
};

export default LatestFoodSlider;