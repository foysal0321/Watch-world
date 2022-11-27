import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import '../Categori/Cetagori.css'

const Categori = () => {

    const {data: cetagori=[], isLoading, refetch} = useQuery({
        queryKey: ['doctors'],
        queryFn: async ()=>{
            try{
            const res = await fetch(`http://localhost:5000/cetagory`,)
            const data = await res.json()
            return data;
            }
            catch{

            }          
        }
    })

    return (
        <div>
            <div className="text-center py-12">
                <h2 className='text-4xl py-2'>Made in LA <br /> provide all over the world</h2>
                <p>You do know that they don’t want you to have lunch.  I’m keeping it real with you, <br /> so what you going do is have lunch. Egg whites, water. Of course they don’t <br />  want us to eat our breakfast</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 lg:mx-20">
         {
            cetagori.map(d =>  <div key={d._id} className="card card-compact w-80 bg-base-100 shadow-xl">
            <Link to={`/cetagory/${d.ceta_id}`}> 

             <h2 className="card-title py-4 mx-4 text-3xl font-bold">{d.categori_name}</h2>                  
        <div className="card-body">           
          <div className="flex justify-around items">
            <div className="indicator">
            <span className="indicator-item badge badge-warning">new</span> 
            <div className="grid w-32 h-32 bg-base-300 place-items-center">
                <img src={d.img} alt="" /></div>             
            </div>
         <div className="indicator">         
            <div className="grid w-32 h-32 bg-base-300 place-items-center">
                <img src={d.img2} alt="" /></div>            
            </div>
         </div>
            <button className="btn btn-primary w-72">Buy Now</button>
             </div>
            </Link>          
            </div>           
            )
         }                    
         </div>
        </div>
    );
};

export default Categori;