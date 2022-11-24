import React, { useEffect, useState } from 'react';

const Allseller = () => {
    const [seller,setseller] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/seller`)
        .then(res=>res.json())
        .then(data=> setseller(data))
    },[])

    return (
        <div>
          <h2 className='text-2xl py-4'>All Seller: </h2>

        <div className="overflow-x-auto">
<table className="table w-full">

<thead>
  <tr>
    <td></td>
    <th>Name</th>
    <th>Email</th>
    <th>Role</th>
    <th>Delete</th>

  </tr>
</thead>
<tbody>
    {
        seller.map((d, i) => <tr key={i}>
        <td>{i+1}</td>
         <td>{d.name}</td>
        <td>{d.email}</td>       
        <td>{d.role}</td>       
        <td><button className='btn-xs btn-warning'>Delete</button></td>
    </tr>)
    }
  
</tbody>
</table>
</div>
        </div>
    );
};

export default Allseller;