import React, { useEffect, useState } from 'react';

import Modal from '../booking/Modal';
import WoodCard from './WoodCard';


const Woodwatch = () => {
    const [wood,setwood] = useState([]);
    const [modal,setmodal] = useState(null)

    useEffect(()=>{
        fetch(`http://localhost:5000/wood-watchs`)
        .then(res=>res.json())
        .then(data=> setwood(data))
    });

    const handleBooking=(e)=>{
        //e.preventDefault()
        console.log(e);

    }
    return (
        <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
    {
        wood.map((d,i) => 
            <WoodCard 
            key={i}
            data={d}
            setmodal={setmodal}
            />
     
        )      
     }
     {
        modal && 
        <Modal 
        data={modal}
        setmodal={setmodal}
        />
     }
     </div>
    </div>
    );
};

export default Woodwatch;




{/*<div className="card card-compact w-80 bg-base-100 shadow-xl">
 <figure><img src={d.img} alt="Shoes" /></figure>
<div className="card-body">
    <h2 className="card-title">{d.watch_name}</h2>
    <p>location: {d.location}</p>
    <p>Resale: ${d.resale_price}</p>
    <p>Orginal: ${d.orginal_price}</p>
    <p>years of use: {d.years_use}</p>
    <p>seller's name: {d.seller_name}</p>
    <div className="flex items-start">
         <p> seller verify:  </p>
         <p><FcApproval /></p>
    </div>
   
    <div className="card-actions justify-end">
    <label onClick={()=> handleBooking(d)}
         htmlFor="booking-modal"
          className="btn btn-primary text-white"
          >Booking Now</label>

    </div>
</div>
  </div>*/}