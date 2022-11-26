import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Useadmin from '../hooks/Useadmin';
import Navbar from '../share/Navbar/Navbar';
import { Authcontext } from '../useContext/Context';

const DashboardLyout = () => {
    const {user} = useContext(Authcontext)
    const [isadmin] = Useadmin(user?.email)
 
    return (
        <div>
            <Navbar />
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                <Outlet />                            
                </div> 
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80  text-base-content">
                    <li><Link to='/dashboard'>My orders</Link></li>
                   
                          <li><Link to='/dashboard/add-product'>Add Product</Link></li>
                          { isadmin && <>
                            
                            <li><Link to='/dashboard/all-users'>All users</Link></li>
                            <li><Link to='/dashboard/all-seller'>All seller</Link></li>
                            <li><Link to='/dashboard/all-buyer'>All buyer</Link></li>
                            </>
                          }
                         
                        
                                                                            
                    </ul>           
                </div>
              </div>        
        </div>   
        );
};

export default DashboardLyout;