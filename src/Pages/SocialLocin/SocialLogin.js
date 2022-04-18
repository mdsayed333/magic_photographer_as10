import React from 'react';
import google from '../../img/icon/google.png';
import github from '../../img/icon/github2.png';
import './SocialLogin.css';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || "/";

    if(user){
        navigate(from, { replace: true });
      }

    let handleError;
    if(error){
        handleError = <p className='text-danger'> {error.message}</p>
    }
    return (
        <div>
             <div className="w-50 mx-auto">
      <div className="d-flex justify-center align-items-center">
        <div style={{ height: "1px" }} className="bg-danger w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-danger w-50"></div>
      </div>
      {
          handleError
      }
      <div className="">
        <button 
            onClick={()=> signInWithGoogle()}
            className="social w-50 my-2 d-block mx-auto">
          <img style={{ height: "30px" }} src={google} alt="" />
          <span className="ps-2">Google Sign In</span>
        </button>
        <button 
            // onClick={() => signInWithGithub()}
            className="social w-50 my-2 d-block mx-auto">
          <img className='rounded-circle' style={{ height: "35px" }} src={github} alt="" />
          <span className="mx-2">GitHub Sign In</span>
        </button>
      </div>
    </div>
        </div>
    );
};

export default SocialLogin;