import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Useadmin from '../../hooks/Useadmin';
import Useseller from '../../hooks/Useseller';
import { Authcontext } from '../../useContext/Context';
import '../Navbar/Navbar.css'

const Navbar = () => {
  const {user, logoutUser} = useContext(Authcontext)
  const [isadmin] = Useadmin(user?.email);
  const [isSeller] = Useseller(user?.email)  

  const logOut=()=>{
    logoutUser()
    .then(result=>{ })
    .catch(err=>{
        console.error(err);
    })
  }
  

    const menuitems= <>
        <li><Link to='/'>Home</Link> </li>               
        <li><Link to='/blog'>Blog</Link> </li>   
        {
          user ? 
          <>
                    
          <li><Link to='/dashboard'>Dashboard</Link> </li> 
          <li> <button onClick={logOut} className='btn btn-sm btn-secondary lg:mt-2 py-2 text-white rounded-md'>Logout</button> </li> 
          </>
          :
          <> 
          <li><Link to='/signup'>Signup</Link> </li>              
          <li><Link to='/signin'>Signin</Link> </li> 
          </>
        }   
                    
        
    </>

    return (
        <div className="navbar bg-base-100 justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuitems}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-3xl text-fuchsia-700 font-bold">Watch World</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
           {menuitems}
          </ul>
        </div>
        <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>      
      </div>

    );
};

export default Navbar;