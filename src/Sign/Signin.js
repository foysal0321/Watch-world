import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../useContext/Context';
import toast, { Toaster } from 'react-hot-toast';

const Signin = () => {
    const {user, signUser, signinGoogle} = useContext(Authcontext);
    const [error ,seterror] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'

    //user signin
    const handleSignin =(e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signUser(email,password)
        .then(result=>{
            const user = result.user;
            toast.success('Successfully Signin');
            seterror('')
            form.reset();
            navigate(from, {replace: true})
        })
        .catch(err=> {
            seterror(err.message)
            console.error(err)
        })
    }

    //signin google
    const signupGoogle =()=>{
        signinGoogle()
        .then(result=>{
            const user = result.user;
            toast.success('Successfully Signup');
            seterror('')
            navigate(from, {replace: true})
            //console.log(user);
        })
        .catch(err=> {
            seterror(err.message)
            console.error(err)
        }) 
    };

    return (
        <div className='w-96 mx-auto py-8'>
        <h3 className='text-3xl font-bold text-center py-2'>Log In</h3>
        <form onSubmit={handleSignin}>
     <div className="form-control w-full max-w-xs">
        <label className="label">
         <span className="label-text">Email</span>
        </label>
        <input type="email" name='email' placeholder="email" className="input input-bordered w-full max-w-xs" /> 
    </div>
     <div className="form-control w-full max-w-xs">
        <label className="label">
         <span className="label-text">Password</span>
        </label>
        <input type="password" name='password' placeholder="password" className="input input-bordered w-full max-w-xs" /> 
     </div>
     <p className='text-red-600 py-1'>{error}</p>
   <button className='btn w-5/6 mt-4 text-white btn-primary'>Signup </button>
    </form>
    <button onClick={signupGoogle} className='btn w-5/6 mt-4 text-white'>Signup Google</button>
    <p className='py-2 mx-3'>Are you new a site please <Link to='/signup' className='text-orange-500 font-bold'>Signup</Link></p>
        </div>
    );
};

export default Signin;