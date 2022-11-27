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
   // const [isSeller] = Useseller(user?.email)
    const [seller,setseller] = useState([])
    const [buyer,setbuyer] = useState([])
    
 
   

    useEffect(()=>{
      fetch(`http://localhost:5000/users/buyers`)
      .then(res=>res.json())
      .then(buy=>setbuyer(buy))
      
    },[])
    useEffect(()=>{
      fetch(`http://localhost:5000/users/sellers`)
      .then(res=>res.json())
      .then(sel=>setseller(sel))
      
    },[])
     
       // console.log(isSeller);
         //console.log(seller.role);
      

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