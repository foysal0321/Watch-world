import React from 'react';
import { FcApproval } from "react-icons/fc";

const Dresscard = ({data,setmodal}) => {
    const {_id,watch_name, location,resale_price, orginal_price,
        seller_name,years_use,img} = data;
    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
       <div className="card-body">
           <h2 className="card-title">{watch_name}</h2>
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
          
           <div className="card-actions justify-end">
           <label onClick={()=> setmodal(data)}
                htmlFor="booking-modal"
                 className="btn btn-primary text-white"
                 >Booking Now</label>
       
           </div>
       </div>
         </div>
    );
};

export default Dresscard;