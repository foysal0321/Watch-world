import React, { useState } from 'react';
import { FcApproval } from "react-icons/fc";
import { useLoaderData } from 'react-router-dom';
import Modal from '../booking/Modal';
import './Dress.css'

const ItemDetails = () => {
    const getdata = useLoaderData();
    const [modal,setmodal] = useState(null);

    const {_id,watch_name, location,resale_price, orginal_price,
        seller_name,years_use,img} = getdata;

    return (
    <div className="hero min-h-screen bg-base-200 itemdetails">
      <div className="hero-content flex-col lg:flex-row">
    <img src={img} />
    <div className='py-6 info'>
      <h1 className="text-3xl font-bold">{watch_name}</h1>
           <p>location: {location}</p>
           <p>Resale: ${resale_price}</p>
           <p>Orginal: ${orginal_price}</p>
           <p>years of use: {years_use}</p>
           <p>Posted on: 2022-11-26T16:41:33.929Z</p>       
           <p>seller's name: {seller_name}</p>
           <div className="flex items-start">
                <p> seller verify:  </p>               
                <p><FcApproval /></p>             
           </div>
            <p>Status: available</p>
           <label onClick={()=> setmodal(getdata)}
                htmlFor="booking-modal"
                 className="btn btn-primary text-white"
                 >Booking Now</label>
                 <button className='btn mx-2'>Report</button>
    </div>
  </div> 
  {
        modal && 
        <Modal
        data={modal}
        setmodal={setmodal}
        />
     }


</div>
    );
};

export default ItemDetails;

