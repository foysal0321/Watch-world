import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const Allusers = () => {
    const [deletUser,setdeletUser] = useState(null);

    
    const {data: users=[], isLoading, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async ()=>{
            try{
            const res = await fetch(`https://watch-world.vercel.app/users`,{            
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

    //make admin
    const handleMakeadmin = id=>{
        fetch(`https://watch-world.vercel.app/users/admin/${id}`,{
            method: 'PUT', 
            headers: {
                'authrazation': `bearer ${localStorage.getItem('token')}`
              }          
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount > 0){
                alert('sucess admin')
                refetch()
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
        <h2 className='text-2xl py-4'>All Users: {users.length} </h2>

      <div className="overflow-x-auto">
<table className="table w-full">

<thead>
<tr>
  <td></td>
  <th>Name</th>
  <th>Email</th>
  <th>Role</th>
  <th>Action</th>

</tr>
</thead>
<tbody>
  {
      users.map((d, i) => <tr key={i}>
      <td>{i+1}</td>
       <td>{d.name}</td>
      <td>{d.email}</td>       
      <td>{d.role}</td>       
      <td>
      { d?.role !== 'admin' && <button onClick={()=> handleMakeadmin(d._id)} className='btn-xs btn-primary'>Make admin</button> }
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

export default Allusers;