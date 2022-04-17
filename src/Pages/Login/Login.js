import { async } from "@firebase/util";
import { useState } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Footer from "../Shared/Footer/Footer";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending, resetPasswordError] = useSendPasswordResetEmail(
      auth
    );
  

    let from = location.state?.from?.pathname || "/";

  if(user){
    navigate(from, { replace: true });
  }


  const handleFormSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);

    signInWithEmailAndPassword(email, password);
  };


  const forgetPassword = async () =>{
    await sendPasswordResetEmail(email);
          alert('Sent Verification email');
  }


  return (
    <div className="container ">
      <div className="">
        <div className="w-50 mx-auto login-container  p-3 rounded">
          <form
            onSubmit={handleFormSubmit}
            
          >
            <h2> Login</h2>
            <div className="mb-1">
              <label className="form-label w-100">
                Email address
                <input
                onBlur={(event)=> setEmail(event.target.value)}
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
            {/* <button className="btn btn-link text-decoration-none">
            Forget Password
          </button> */}
            <p className="mt-2 text-center">
              Dont have any account?{" "}
              <span>
                <Link to="/register" className="text-danger">
                  Create an account
                </Link>
              </span>
            </p>
          </form>
          <button onClick={forgetPassword} className="btn btn-link text-decoration-none">
            Forget Password
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
