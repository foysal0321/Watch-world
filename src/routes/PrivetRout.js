import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../useContext/Context';

const PrivetRout = ({children}) => {
    const {user, loding} = useContext(Authcontext);
    const location = useLocation();
   
    if(loding){
        return <progress className="progress w-56 text-center py-5"></progress>
    };

   if(user){
    return children;
   };

   return <Navigate to='/signin' state={{from: location}} replace></Navigate>
};

export default PrivetRout;