import React from 'react';
import './RoyalHome.css';

const RoyalHome = () => {
    return (
        <div className="royalHome">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="homeContent">
                            <h1>Always Choose Good</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur<br /> adipisicing elit. Porro fuga incidunt
                                 praesentium <br />nobis assumenda
                             accusantium possimus facilis!</p>

                            <button className="custom-btn">Our Menu</button>
                        </div> {/* homeContent */}
                    </div> {/* col*/}
                </div> {/* row */}
            </div> {/* container */}
        </div> /* Royal Home */
    );
};

export default RoyalHome;