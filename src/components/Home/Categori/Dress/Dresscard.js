import React from 'react';
import { FcApproval } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Dresscard = ({data,setmodal}) => {
    const {_id,watch_name, location,resale_price, orginal_price,
        seller_name,years_use,img, categori_name} = data;
    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl lg:mx-24 py-18 ">
         <Link to={`/cetagory/${categori_name}/${_id}`}>
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
            <h2 className="text-2xl text-center">{watch_name}</h2>         
            </div>
         </Link>
         </div>
    );
};

export default Dresscard;