import React from "react";
import "./FoodSlider.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { foods } from "../../../FoodData/FoodData";

const FoodSlider = (props) => {
  const food = foods;
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="container">
      <div className="clearfix mt-2">
        <h4 className="float-left">Royal Latest</h4>
        <Link className="float-right text-uppercase" to="/">
          See all
        </Link>
      </div>
      <Carousel
        infinite={true}
        responsive={responsive}
        //showDots={true}
        autoPlay={props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        customTransition="all 1s"
        transitionDuration={1000}
      >
        {food
          .reverse()
          .slice(0, 10)
          .map((fd) => {
            return (
              <>
                <Link to={`/`}>
                  <div className="col">
                    <div className="card">
                      <div className="card-img-top">
                        <img
                          style={{
                            width: "100%",
                            height: "260px",
                            objectFit: "cover",
                          }}
                          src={fd.image}
                          alt={fd.image}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
      </Carousel>
    </div>
  );
};

export default FoodSlider;