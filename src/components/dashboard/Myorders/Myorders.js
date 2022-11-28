import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../../useContext/Context';

const Myorders = () => {
  const {user} = useContext(Authcontext);

    const [orders,setorders] = useState([]);

    useEffect(()=>{
      axios.get(`https://watch-world.vercel.app/booking?email=${user?.email}`,{
        headers: {
          'authrazation': `bearer ${localStorage.getItem('token')}`
        }
      })
      .then(res=>{
        setorders(res.data)
        //console.log(res.data);
      })
      .catch(err=>{
        console.log(err);
      })
    },[user?.email])

    return (
        <div>
        <h3 className='text-2xl py-2'>My orders: {orders.length}</h3>
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
              {
                d.resale_price && !d.paid && <Link to={`/dashboard/payment/${d._id}`}>
                <button className='btn btn-sm'>pay</button>
                </Link>
              }
              {
                d.price && d.paid && <span className='text-green-600 font-bold'>Paid</span>
              }
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