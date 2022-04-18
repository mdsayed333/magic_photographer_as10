import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({children}) => {
    const location = useLocation();
    const [user, loading, error] = useAuthState(auth);
    if(loading){
        return <div className='text-center' ><Spinner animation="border" variant="danger" /></div>

    }

    let from = location.state?.from?.pathname || "/";

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }



    return children;
};

export default RequireAuth;