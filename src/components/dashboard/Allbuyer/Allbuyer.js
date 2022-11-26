import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const Allbuyer = () => {

    const {data: buyers = [], isLoading, refetch} = useQuery({
        queryKey: ['Buyer'],
        queryFn: async ()=>{
            try{
            const res = await fetch(`http://localhost:5000/users/buyers`,{            
                headers: {
                   // 'authrazation': `bearer ${localStorage.getItem('token')}`
                }
            })
            const data = await res.json()
            return data;
            }
            catch{

            }         
        }
    })

    //delete
    const deleteUser=(id)=>{
        fetch(`http://localhost:5000/users/${id}`,{
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
        <h2 className='text-2xl py-4'>All Buyer: {buyers.length}</h2>

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
        buyers.map((d, i) => <tr key={i}>
        <td>{i+1}</td>
         <td>{d.name}</td>
        <td>{d.email}</td>       
        <td>{d.role}</td>       
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

export default Allbuyer;