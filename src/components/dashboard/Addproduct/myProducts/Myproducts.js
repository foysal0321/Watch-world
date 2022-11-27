import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Authcontext } from '../../../../useContext/Context';

const Myproducts = () => {
    const {user} = useContext(Authcontext)
    const [myProducts,setorders] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/products?useR=${user?.email}`)
        .then(res=>res.json())
        .then(data=> setorders(data))
    },[user?.email])
    //console.log(myProducts);

    
    return (
        <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
    {
        myProducts.map(d => <div key={d._id} className="card card-compact w-80 bg-base-100 shadow-xl">
        <figure><img src={d.img} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{d.item}</h2>
            <p>Posted on: {d.posted}</p>
            {/* <p>location: {d.location}</p>
            <p>Resale: ${d.resale_price}</p>
            <p>Orginal: ${d.orginal_price}</p>
            <p>years of use: {d.years_use}</p>
            <p>seller's name: {d.seller_name}</p> */}
            <div className="flex items-start">
                 <p> seller verify:  </p>
                 {/* <p><FcApproval /></p> */}
            </div>
           
            <div className="card-actions justify-end">
            <button className="btn btn-primary w-72">Buy Now</button>
            </div>
        </div>
        </div>
        )
     }
     </div>
    </div>
    );
};

export default Myproducts;