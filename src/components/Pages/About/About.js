import React from 'react';
import './About.css';
import aboutImg from '../../../images/about_img2.jpg';

const About = () => {
    return (
        <div className="aboutArea">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="aboutImg" style={{marginTop: '300px'}}>
                            <img src={aboutImg} alt="" srcset="" />
                        </div>
                    </div>
                    <div className="col-md-5 offset-md-1">
                        <div className="aboutContent" style={{marginTop: '300px'}}>
                            <h6>About <span className="highlight">R</span>oyal Kitchen</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores maxime
                            impedit pariatur inventore possimus velit corporis eaque aliquam,
                            repellat ipsum alias nisi, dolore ullam! At explicabo ipsum fugiat
                            porro qui, quis odit ut officia quae dolor neque
                                   commodi, voluptates recusandae.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores maxime
                            impedit pariatur inventore possimus velit corporis eaque aliquam,
                            repellat ipsum alias nisi, dolore ullam! At explicabo ipsum fugiat
                            porro qui, quis odit ut officia quae dolor neque
                                   commodi, voluptates recusandae.</p>


                            <button className="custom-btn mt-5">Our Foods</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;