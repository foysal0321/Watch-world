import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../share/Navbar/Navbar';

const DashboardLyout = () => {
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
                          <li><Link to='/dashboard/all-seller'>All seller</Link></li>
                          <li><Link to='/dashboard/all-buyer'>All buyer</Link></li>
                        
                                                                            
                    </ul>           
                </div>
              </div>        
        </div>   
        );
};

export default DashboardLyout;