import React, { useEffect, useState } from 'react';

const Myorders = () => {
    const [orders,setorders] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/booking`)
        .then(res=>res.json())
        .then(data=> setorders(data))
    },[])

    return (
        <div>
        <h3 className='text-2xl py-2'>My orders: </h3>
        <div className="overflow-x-auto mt-5">
        <table className="table w-full">
            <thead>
            <tr>
                <th></th>
                <th>Avataer</th>
                <th>Title</th>    
                <th>Price</th>
                <th>Pay</th>
            </tr>
            </thead>
            <tbody>

        {
            orders.map((d,i)=> <tr key={i}>
             <th>{i+1}</th>
              <td>
               <div className="avatar">
                 <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={d.image} />
                 </div>
                </div>
              </td>
              <td>{d.item}</td>
              <td>${d.price}</td>
              <td>
              <button className='btn btn-sm'>pay</button>
              </td>
              
            </tr>)
        }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Myorders;