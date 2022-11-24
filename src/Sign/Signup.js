import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../useContext/Context';
import toast, { Toaster } from 'react-hot-toast';

const Signup = () => {
    const {user, crateUser, updateUser, signinGoogle} = useContext(Authcontext);
    const [error ,seterror] = useState('')
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'

    const handleSignup =(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const role = form.role.value;

        //create user
        crateUser(email,password)
        .then(result=>{
            const user = result.user;
            const profile = {
                displayName: name
            }
            seterror('')
            //update profile name
            updateUser(profile)
            .then(()=>{
                toast.success('Successfully Signup');
                seterror('')
                navigate(from, {replace: true})
            })
            .catch(err=> {
                seterror(err.message)
                console.error(err)
            })
            console.log(user);
            form.reset()
        })
        .catch(err=> {
            seterror(err.message)
            console.error(err)
        })     

    }

    //signup google
    const signupGoogle =()=>{
        signinGoogle()
        .then(result=>{
            const user = result.user;
            toast.success('Successfully Signup');
            seterror('');
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
        <h3 className='text-3xl font-bold text-center py-2'>Sign up</h3>
        <form onSubmit={handleSignup}>
     <div className="form-control w-full max-w-xs">
        <label className="label">
         <span className="label-text">Name</span>
        </label>
        <input type="text" name='name' placeholder="name" className="input input-bordered w-full max-w-xs" /> 
    </div>
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
     <select name='role' className="select select-bordered w-full max-w-xs mt-3">
        <option disabled selected>Selected role</option>
        <option value='Buyer'>Buyer</option>
        <option value='Seller'>Seller</option>
    </select>
    <p className='text-red-600 py-1'>{error}</p>
    <button className='btn w-5/6 mt-4 text-white btn-primary'>Sigin</button>
    </form>
    <button onClick={signupGoogle} className='btn w-5/6 mt-4 text-white'>Signup Google</button>
    <p className='py-3 mx-3'>Already you visit please <Link to='/signin' className='text-orange-500 font-bold'>Login</Link></p>
        </div>
    );
};

export default Signup;