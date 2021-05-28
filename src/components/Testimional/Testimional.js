import React from 'react';
import './Testimional.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import icon1 from '../../images/testi1.jpg';
import icon2 from '../../images/testi2.jpg';
import icon3 from '../../images/testi3.jpg';



const reviewData = [
    {
        name: 'Shaker Hossain',
        icon: icon1,
        // title: 'CEO, SH Tech.',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium itaque cumque modi facere similique harum'
    },
    {
        name: 'Shaker Hossain',
        icon: icon2,
        // title: 'CEO, SH Tech.',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium itaque cumque modi facere similique harum'
    },
    {
        name: 'Shaker Hossain',
        icon: icon3,
        // title: 'CEO, SH Tech.',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium itaque cumque modi facere similique harum'
    },
    {
        name: 'Shaker Hossain',
        icon: icon1,
        // title: 'CEO, SH Tech.',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium itaque cumque modi facere similique harum'
    },
    {
        name: 'Shaker Hossain',
        icon: icon1,
        // title: 'CEO, SH Tech.',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium itaque cumque modi facere similique harum'
    },
]

const Testimional = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className="review-area">
            <div className="container">
                <div class="section-title">
                    <h1 style={{color: '#fff'}}>CUSTOMERS SAY</h1>
                    <div className="br-top"></div>
                    <div className="br-middle"></div>
                    <div className="br-bottom"></div>
                </div>
                <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000}
                    keyBoardControl={true} dotListClass="custom-dot-list-style" showDots={true} transitionDuration= 'all 2s'>
                    {
                        reviewData.map(carousel => {
                            console.log(carousel)
                            return (
                                <div className="review-box">
                                    <img className='carousel-image' src={carousel.icon} alt="shaker" />
                                    <h4>{carousel.name}</h4>
                                    {/* <h5>{carousel.title}</h5> */}
                                    <p>{carousel.description}</p>
                                </div>
                            )
                        })
                    }
                </Carousel>;
            </div>
        </section>
    );
};

export default Testimional;