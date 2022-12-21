import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Useadmin from '../hooks/Useadmin';
import Useseller from '../hooks/Useseller';
import Navbar from '../share/Navbar/Navbar';
import { Authcontext } from '../useContext/Context';
import { useQuery } from '@tanstack/react-query';

const DashboardLyout = () => {
    const {user} = useContext(Authcontext)
    const [isadmin] = Useadmin(user?.email);
    const [isSeller] = Useseller(user?.email)   


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
                      <div className="card  bg-base-100 shadow-xl">
              <div className="card-body text-center bg-slate-400 rounded-lg">
                <h2 className="text-xl">{user?.displayName}</h2>
                <p>{user?.email}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary btn-sm mt-3 mr-5 ">Send verify request</button>
                </div>
              </div>
            </div>

                    <li><Link to='/dashboard'>My orders</Link></li>
                                        
                         {
                          isSeller && <>
                           <li><Link to='/dashboard/add-product'>Add Product</Link></li> 
                           <li><Link to='/dashboard/my-products'>My products</Link> </li>
                          </>
                         }
             
                          { isadmin && <>
                            <li><Link to='/dashboard/add-product'>Add Product</Link></li> 
                            <li><Link to='/dashboard/my-products'>My products</Link> </li>
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