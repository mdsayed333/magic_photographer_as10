import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({children}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [user, loading, error] = useAuthState(auth);

    let from = location.state?.from?.pathname || "/";

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }



    return children;
};

export default RequireAuth;