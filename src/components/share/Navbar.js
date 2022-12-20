import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/Authcontext';

const Navbar = () => {
  const {user, logoutUser} = useContext(AuthContext);
  const logout=()=>{
    logoutUser()
    .then(result=>{ })
  .catch(err=>{
      console.error(err);
  })
  }
    const menuitems= <>
        <li><Link to='/'>Home</Link></li>      
        <li><Link to='/apporment'>Apporment</Link></li>
        <li><Link>About</Link></li>
        {
          user?.email ? 
          <>
            <li><Link to='/dashboard'>Dashboard</Link></li>
          <li><button onClick={logout}><Link to='/login'>LogOut</Link></button> </li>       
          </> :         
           <li><Link to='/signup'>SignUp</Link></li> 
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
    <a className="btn btn-ghost normal-case text-xl">Docmed</a>
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