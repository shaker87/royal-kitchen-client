import React, { useState } from 'react';
import FoodDisplay from '../FoodDisplay/FoodDisplay';
import "./FoodTab.css";

const FoodTab = () => {
    const [tab, setTab] = useState('bangla')
 
    return (
        <div className="foodTab">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title text-center">
                            <h1>Our Menu</h1>
                        </div>
                        <div className="itemMenu">
                            <ul>
                                <li onClick={() => setTab('bangla')}><span>Bangla</span></li>
                                <li onClick={() => setTab('indian')}><span >Indian</span></li>
                                <li onClick={() => setTab('chinese')}><span>Chinese</span></li>
                                <li onClick={() => setTab('thai')}><span>Thai</span></li>
                            </ul>

                        </div>
                    </div>
                </div>

                <div className="my-5">
                    <FoodDisplay tab={tab}></FoodDisplay>
                </div>
            </div>
        </div>
    );
};

export default FoodTab;