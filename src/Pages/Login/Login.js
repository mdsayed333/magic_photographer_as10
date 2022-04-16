import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";

const Login = () => {
  return (
    <div className="container ">
      <div className="">
        <form className="w-50 mx-auto login-container bg-light p-3 rounded">
          <h2> Login</h2>
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
          

          <button
            type="submit"
            className="myButton d-block mt-2 w-50 mx-auto"
          >
            Login
          </button>
          <button className="btn btn-link text-decoration-none">
            Forget Password
          </button>
          {/* <p className="mt-2 text-center">
            Dont have any account?{" "}
            <span>
              <Link to="/register" className="text-danger">
                Create an account
              </Link>
            </span>
          </p> */}
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
