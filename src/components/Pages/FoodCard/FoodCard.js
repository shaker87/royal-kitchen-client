import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FoodCard.css'

const FoodCard = ({ item }) => {
    const { image, name, price, details, category } = item;
    const [love, setLove] = useState(false);
    const triggerToggle = () => {
        setLove( !love )
    }
    
    return (
        <div className="col-sm-6 col-md-6 col-lg-4">
            <div className="food-card">
                <div className="food-card_img">
                    <img src={image} width="100%" alt="" srcset="" />
                    <Link to="/" onClick={() => triggerToggle() }>{love ? <i className="fa fa-heart"></i> : <i className="fa fa-heart-o"></i>}</Link>
                </div>
                <div className="food-card_content">
                    <div className="food-card_title-section">
                        <Link to="/" className="food-card_title">{name}</Link>
                        <Link to="/" className="food-card_author">{category}</Link>
                        <p>{details.slice(0, 50)}...</p>
                    </div>
                    <div className="food-card_bottom-section">
                        <div className="space-between">
                            <div>
                                <span className="fa fa-fire"></span> 220 - 280 Kcal
                                </div>
                            <div className="pull-right">
                                <span className="badge badge-success">Veg</span>
                            </div>
                        </div>
                        <hr />
                        <div className="space-between">
                            <div className="food-card_price">
                                <span>{price}$</span>
                            </div>
                            <div>
                                <button className="order-btn">Add to cart</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;