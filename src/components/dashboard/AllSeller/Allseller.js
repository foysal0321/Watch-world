import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Authcontext } from '../../../useContext/Context';

const Allseller = () => {
   const {user} = useContext(Authcontext)

    const {data: sellers = [], isLoading, refetch} = useQuery({
      queryKey: ['sellers'],
      queryFn: async ()=>{
          try{
          const res = await fetch(`https://watch-world.vercel.app/users/sellers`)
          const data = await res.json()
          return data;
          }
          catch{

          }         
      }
  })

  const handleVerify = id=>{
    fetch(`https://watch-world.vercel.app/users/admin/${id}`,{
        method: 'PUT',           
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.modifiedCount > 0){
            alert('sucess verify')
            //refetch()
        }
    })
}

  //delete user
  const deleteUser=(id)=>{
    fetch(`https://watch-world.vercel.app/users/${id}`,{
        method: 'DELETE',           
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.deletedCount > 0){
            alert('delete sucess')
            refetch()
        }          
    })       
}

if(isLoading){
    return <progress className="progress w-56"></progress>
}


    return (
        <div>
          <h2 className='text-2xl py-4'>All Seller: {sellers.length} </h2>

        <div className="overflow-x-auto">
<table className="table w-full">

<thead>
  <tr>
    <td></td>
    <th>Name</th>
    <th>Email</th>
    <th>Role</th>
    <th>Verify</th>
    <th>Action</th>

  </tr>
</thead>
<tbody>
    {
        sellers.map((d, i) => <tr key={i}>
        <td>{i+1}</td>
         <td>{d.name}</td>
        <td>{d.email}</td>       
        <td>{d.role}</td>   
        <td>
          {
            
            <button  className='btn-xs btn-primary'>Verify now</button>  
          }   
            
            </td>    
        <td>
        {
        d?.role !== 'admin' && <button onClick={()=> deleteUser(d._id)} className='btn-xs btn-warning mx-4'>Delete</button>
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

export default Allseller;