import React from "react";
import './SingleSlider.css'

function SingleSlider(props) {
  const { bg } = props.totalData;
  return (
    <div className='slider-content slide' style={{ backgroundImage: `url(${bg})` }}>

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
      </div>

    </div >
  );
}

export default SingleSlider;
