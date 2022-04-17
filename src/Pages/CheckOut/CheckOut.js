import React from "react";
import Footer from "../Shared/Footer/Footer";
import './CheckOut.css';

const CheckOut = () => {
  return (
    <div>
        <div className="w-50 mx-auto checkout">
      <h3> Please Input Your Details</h3>
      <div className="mb-1 ">
        <label className="form-label w-100">
          Email address
        <input
        
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          />
          </label>
      </div>
      <div className="mb-1">
        <label className="form-label w-100">
          Example textarea
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          ></textarea>
          </label>
      </div>

      <div className="mb-3">
        <label className="form-label w-100">
          Email address
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          />
          </label>
      </div>
      <div className="d-block mx-auto">
      <button className="d-block mx-auto myButton">
          Submit
      </button>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default CheckOut;
