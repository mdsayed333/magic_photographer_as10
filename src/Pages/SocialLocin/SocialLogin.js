import React from 'react';
import google from '../../img/icon/google.png';
import github from '../../img/icon/github2.png';
import './SocialLocin.css';

const SocialLogin = () => {
    return (
        <div>
             <div className="w-50 mx-auto">
      <div className="d-flex justify-center align-items-center">
        <div style={{ height: "1px" }} className="bg-danger w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-danger w-50"></div>
      </div>
      <div className="">
        <button 
            // onClick={()=> signInWithGoogle()}
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