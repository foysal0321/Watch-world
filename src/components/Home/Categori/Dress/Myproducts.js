import React, { useEffect, useState } from 'react';

const Myproducts = () => {
    const [dress,setdress] = useState([])

//     useEffect(()=>{
//     fetch(`https://watch-world.vercel.app/products/dress`)
//    .then(res=>res.json())
//    .then(getData => setdress(getData))
   
//     },[])
//  console.log(dress);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
           {
        dress.map(d => <div  className="card card-compact w-80 bg-base-100 shadow-xl">
                <figure><img src={d.img} alt="Shoes" /></figure>
               <div className="card-body">
                   <h2 className="card-title">{d.item}</h2>
                   <p>location: {d.location}</p>
                   <p>Resale: ${d.price}</p>
                   
                   <p>years of use: {d.use}</p>
                   <p>seller's name: {d.seller}</p>
                   <div className="flex items-start">
                        <p> seller verify:  </p>
                        {/* <p><FcApproval /></p> */}
                   </div>
                  
                   <div className="card-actions justify-end">
                   {/* <label onClick={()=> setmodal(data)}
                        htmlFor="booking-modal"
                         className="btn btn-primary text-white"
                         >Booking Now</label> */}
               
                   </div>
               </div>

        </div>)
               
       }
        </div>
    );
};

export default Myproducts;