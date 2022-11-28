import React from 'react';
import { FcApproval } from "react-icons/fc";

const AdvercsCard = ({ad}) => {

    return (
        <div>
            <div className="card card-compact w-80 bg-base-100 shadow-xl">
                    <figure><img src={ad.img} alt="Shoes" /></figure>
                   <div className="card-body">
                       <h2 className="card-title">{ad.watch_name}</h2>
                       <p>location: {ad.location}</p>
                       <p>Resale: ${ad.price}</p>
                       <p>Orginal: $</p>
                       <p>years of use: {ad.years_use}</p>
                       <p>Posted on: {ad.posted}</p>
                       <p>seller's name: {ad.seller_name}</p>
                       <div className="flex items-start">
                            <p> seller verify:  </p>
                            <p><FcApproval /></p>
                       </div>
                      
                       <div className="card-actions justify-end">
                       <label 
                             className="btn btn-primary text-white"
                             >Booking Now</label>                 
                       </div>
                   </div>
                     </div>
        </div>
    );
};

export default AdvercsCard;