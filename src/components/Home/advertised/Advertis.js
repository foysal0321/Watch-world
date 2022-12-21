import React, { useContext, useEffect, useState } from 'react';
import { FcApproval } from "react-icons/fc";
import { useLoaderData } from 'react-router-dom';
import { Authcontext } from '../../../useContext/Context';
import AdModal from './AdModal';
import AdvercsCard from './AdvercsCard';

const Advertis = () => {
    const {user} = useContext(Authcontext)
    const [advercs,setadvercs] = useState([])
    const [modal,setmodal] = useState(null)
   // const data = useLoaderData()
    //console.log(data);

    useEffect(()=>{
        fetch(`https://watch-world.vercel.app/advertics?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=> setadvercs(data))
    },[user?.email])

   
    
 return (
      <div>
        {
             advercs.length > 0 &&
            <div className="py-10">
                 <h3 className='text-2xl'>Advertised: </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                 {
                    advercs.map((d,i)=> <AdvercsCard
                    key={i}
                    ad={d}
                     setmodal={setmodal}
                    ></AdvercsCard>)
                   
                 }
                  {/* {
                    modal && 
                    <AdModal 
                    data={modal}
                    setmodal={setmodal}
                    />
                } */}
            </div>
            </div>
        }
           
         
        </div>
            
    );
};

export default Advertis;

{/* {
                    advercs.map(ad => <div key={ad._id} className="card card-compact w-80 bg-base-100 shadow-xl">
                    <figure><img src={ad.img} alt="Shoes" /></figure>
                   <div className="card-body">
                       <h2 className="card-title">{ad.item}</h2>
                       <p>location: {ad.location}</p>
                       <p>Resale: ${ad.price}</p>
                       <p>Orginal: $</p>
                       <p>years of use: {ad.use}</p>
                       <p>Posted on: {ad.posted}</p>
                       <p>seller's name: {ad.seller}</p>
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
                     </div>)
                }  */}

