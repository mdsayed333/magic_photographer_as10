import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLocin/SocialLogin";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [handleError, setHandleError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});


  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  let signInError;
  if (error) {
    signInError = <p className="text-danger">{error.message}</p>;
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    console.log(email, password, confirmPassword);

    if (password === confirmPassword) {
      createUserWithEmailAndPassword(email, password);
    } else {
      setHandleError(
        <p className="text-danger">Confirm Password did not match.</p>
      );
    }
  };

  return (
    <div className="container ">
      <div className="">
        <form
          onSubmit={handleFormSubmit}
          className="w-50 mx-auto login-container p-3 rounded"
        >
          <h2> Create Account</h2>
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
          {handleError}
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
          {signInError}
          <button type="submit" className="myButton d-block mt-2 w-50 mx-auto">
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
        <SocialLogin></SocialLogin>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
