import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const Register = () => {
    return (
        <div className="container ">
        <div className="">
            <h2> Create Account</h2>
          <form className="w-50 mx-auto login-container p-3 rounded">
            <div className="mb-1">
              <label className="form-label w-100">
                Email address
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  name="email"
                  required
                />
              </label>
            </div>
            <div className="mb-1">
              <label className="form-label w-100">
                Password
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  required
                />
              </label>
            </div>
            <div className="mb-1">
              <label className="form-label w-100">
                Confirm Password
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-control"
                  required
                />
              </label>
            </div>
            
  
            <button
              type="submit"
              className="myButton d-block mt-2 w-50 mx-auto"
            >
              Register
            </button>
            {/* <button className="btn btn-link text-decoration-none">
              Forget Password
            </button> */}
            <p className="mt-2 text-center">
              Already have an account?{" "}
              <span>
                <Link to="/login" className="text-danger">
                  Login
                </Link>
              </span>
            </p>
          </form>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Register;