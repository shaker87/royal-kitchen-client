import React, { useState } from 'react';
import './RoyalHomeSlider.css';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";


import SingleSlider from './SingleSlider';
import bg1 from "../../images/bg6.jpg";
import bg2 from "../../images/bg3.jpg";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]);




const RoyalHomeSlider = () => {
    const sliderPart = [
        {
            paragraph: "Start to learning today",
            heading: "Online Courses From Leading Experts",
            linkText: "Find Courses",
            bg: bg1
        },
        {
            paragraph: "Start to learning today",
            heading: "Online Courses From Leading Experts",
            linkText: "Find Courses",
            bg: bg2
        },
    ];
    const [ , setSlideIndex] = useState(0);

    const onClickHandler = (swiper) => {
        if (swiper.clickedSlide) {
            if (swiper.clickedSlide.attributes) {
                let a = swiper.clickedSlide.attributes.getNamedItem(
                    "data-swiper-slide-index"
                ).value;
                setSlideIndex(a);
            }
        }
    }
    return (
        <div className='royal-slider'>
            <div className='row'>
             
               
                    <Swiper 
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: true,
                        }}
                        loop={true}
                        onClickHandler={(swiper) => onClickHandler(swiper)}
                        onSlideChange={(swiper) => setSlideIndex(swiper.realIndex)}
                      
                    >
                        {sliderPart.map((slide, i) => {
                            return (
                                <SwiperSlide key={i}>
                                    <SingleSlider totalData={slide} />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                
            </div>
        </div>
    );
};

export default RoyalHomeSlider;