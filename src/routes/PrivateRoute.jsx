import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import {Navigate, useLocation} from 'react-router-dom'
import { ClipLoader } from "react-spinners";
const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className="absolute inset-0 flex justify-center items-center h-screen z-50">
        <ClipLoader color="#36d7b7" />
      </div>
    }
   
    if(user){
        return children
    }
    return <Navigate state={{from: location}} to= '/login' replace></Navigate>
};

export default PrivateRoute;