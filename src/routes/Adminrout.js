import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Useadmin from '../hooks/Useadmin';
import { Authcontext } from '../useContext/Context';

const Adminrout = (children) => {
    const {user, loding} = useContext(Authcontext);
    const [isadmin, adminLoding] = Useadmin(user?.email)
    const location = useLocation();

    if(loding || adminLoding){
        return <progress className="progress w-56"></progress>
    }
   if(user && isadmin){
    return {children};
   }
   return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default Adminrout;