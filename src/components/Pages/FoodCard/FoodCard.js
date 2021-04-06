import React from 'react';
import { Link } from 'react-router-dom';

const FoodCard = ({ item }) => {
    const { image, name, price, details } = item;
    return (
        <div className="col-md-4">
            <div className=" p-3">
                <Link to="#" className="link-style">
                    <div className="card food-card d-flex justify-content-center align-items-center p-3">
                        <img src={image} alt="" height="120" width="120" /> <br />
                        <h6>{name}</h6>
                        <small className="text-muted text-center">{details.slice(0, 50)}...</small>
                        <h4><strong> BDT {price}</strong></h4>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default FoodCard;