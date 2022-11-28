import React from 'react';
import { FcApproval } from "react-icons/fc";

const AdvercsCard = ({ad}) => {

    return (
        <div>
            <div className="card card-compact w-80 bg-base-100 shadow-xl">
                    <figure><img src={ad.img} alt="Shoes" /></figure>
                   <div className="card-body">
                       <h2 className="card-title">{ad.watch_name}</h2>
                      
                       
                      
                       <div className="card-actions justify-end">
                                       
                       </div>
                   </div>
                     </div>
        </div>
    );
};

export default AdvercsCard;