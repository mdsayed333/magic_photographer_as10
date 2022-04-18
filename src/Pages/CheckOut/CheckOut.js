import React from "react";
import { Spinner } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Footer from "../Shared/Footer/Footer";
import './CheckOut.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckOut = () => {
    const handleSubmit = ()=>{
        toast('Form Submit');
    }
  return (
    <div>
        <div className="w-50 mx-auto checkout">
      <h3 className="text-danger pb-3"> Please Input Your Details</h3>
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
          required
          />
          </label>
      </div>
      <div className="d-block mx-auto">
      <button onClick={handleSubmit} className="d-block mx-auto myButton">
          Submit
      </button>
      </div>
    </div>
    <ToastContainer />
    <Footer></Footer>
    </div>
  );
};

export default CheckOut;
