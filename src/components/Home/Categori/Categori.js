import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categori = () => {
    const [dress,setdress] = useState([])
    const [sport,setsport] = useState([])
    const [wood,setwood] = useState([])

    //dress-watch
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/dress-watch`)
    //     .then(res=>res.json())
    //     .then(data=> setdress(data))
    // })

    ///sport-dress
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/sport-watch`)
    //     .then(res=>res.json())
    //     .then(data=> setsport(data))
    // })

    ///wood-dress
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/wood-watch`)
    //     .then(res=>res.json())
    //     .then(data=> setwood(data))
    // })
    useEffect(()=>{
        fetch(`data.json`)
        .then(res=>res.json())
        .then(data=> setwood(data))
    })
    return (
        <div>
            <div className="text-center py-12">
                <h2 className='text-4xl py-2'>Made in LA <br /> provide all over the world</h2>
                <p>You do know that they don’t want you to have lunch.  I’m keeping it real with you, <br /> so what you going do is have lunch. Egg whites, water. Of course they don’t <br />  want us to eat our breakfast</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">


             {
            wood.map(d =>  <div key={d._id} className="card card-compact w-80 bg-base-100 shadow-xl">
            <figure><img src={d.img} alt="Shoes" /></figure>
            <Link to='/dress-watchs'>
            <div className="card-body">
                <h2 className="card-title">{d.categori_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary w-72">Buy Now</button>
                </div>
            </div>
            </Link>
            </div>           
            )
         }

         {/* {
            dress.map(d =>  <div key={d._id} className="card card-compact w-80 bg-base-100 shadow-xl">
            <figure><img src={d.img} alt="Shoes" /></figure>
            <Link to='/dress-watchs'>
            <div className="card-body">
                <h2 className="card-title">{d.categori_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary w-72">Buy Now</button>
                </div>
            </div>
            </Link>
            </div>           
            )
         }
         
         {
            wood.map(d =>  <div key={d._id} className="card card-compact w-80 bg-base-100 shadow-xl">
            <figure><img src={d.img} alt="Shoes" /></figure>
            <Link to='/wood-watchs'>
            <div className="card-body">
                <h2 className="card-title">{d.categori_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary w-72">Buy Now</button>
                </div>
            </div>
            </Link>
            </div>           
            )
         }
         
         {
            sport.map(d =>  <div key={d._id} className="card card-compact w-80 bg-base-100 shadow-xl">
            <figure><img src={d.img} alt="Shoes" /></figure>
            <Link to='/sport-watchs'>
            <div className="card-body">
                <h2 className="card-title">{d.categori_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary w-72">Buy Now</button>
                </div>
            </div>
            </Link>
            </div>           
            )
         }        */}
        

         </div>
        </div>
    );
};

export default Categori;