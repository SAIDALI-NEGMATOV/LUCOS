import React, { Component } from "react";
import "./Snig.css";
import snig from "../Images/snig.jpg";

class Snig extends Component {
  render() {
    return (
      <div className="row d-flex justify-content-between">
        <div className="col-4">
          <img src={snig} alt="" />
        </div>
        <div className="col-7 bg_snig">
          <div className="col-12 d-flex justify-content-center">
            {/* <div className="col-2 t_color">105 project done</div>
            <div className="col-2 t_color">12 years of experience</div>
            <div className="col-2 t_color">10+ big company partnership</div> */}
            <div className="col-3 mt-5 g-2 w-75 d-flex justify-content-center align-align-items-center">
              <div className="col t_color d-flex align-items-center justify-content-center flex-column">
                <h1 className=" fw-bold">105</h1>
                <span className=" fw-bold">project</span>
                <span className=" fw-bold">done</span>
              </div>
              <div className="col t_color d-flex align-items-center justify-content-center flex-column">
                <h1 className=" fw-bold">12</h1>
                <span className=" fw-bold">years of</span>
                <span className=" fw-bold">experience</span>
              </div>
              <div className="col t_color d-flex align-items-center justify-content-center flex-column">
                <h1 className=" fw-bold">10+</h1>
                <span className=" fw-bold">big company</span>
                <span className=" fw-bold">partnership</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Snig;
