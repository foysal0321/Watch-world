import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Authcontext } from '../../../../useContext/Context';
import toast, { Toaster } from 'react-hot-toast';

const Myproducts = () => {
    const {user} = useContext(Authcontext)
    //const [myProducts,setorders] = useState([])

    const {data: myProducts = [], isLoading, refetch} = useQuery({
        queryKey: ['my-products'],
        queryFn: async ()=>{
            try{
            const res = await fetch(`http://localhost:5000/products?useR=${user?.email}`,{
                headers: {
                    'authrazation': `bearer ${localStorage.getItem('token')}`
                  }
            })
            const data = await res.json()
            return data;
            }
            catch{

            }         
        }
    })

    const advertics=(data)=>{
        const {img,watch_name,resale_price,location,seller_name,posted,years_use,categori_name} = data;
        const adver={
            img,
            watch_name,
            resale_price,
            location,
            seller_name,
            posted,
            years_use,
            categori_name,
           email: user?.email
        }
        fetch(`http://localhost:5000/advertics`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adver)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.acknowledged){
                toast.success('Success Adverrtics')
            }
            else{
                alert(result.message)
            }
        })    
        .catch(err=>console.error(err))
    };

    //delete
    const deleteProduct=(id)=>{
        fetch(`http://localhost:5000/products/${id}`,{
            method: 'DELETE',
            headers: {
                'authrazation': `bearer ${localStorage.getItem('token')}`
              }           
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount > 0){
                alert('delete sucess')
               refetch()
            }          
        })       
    }

    return (
        <div>
           <h3 className='text-2xl py-2'>My Products: {Myproducts.length}</h3>
        <div className="overflow-x-auto mt-5">
        <table className="table w-full">
            <thead>
            <tr>
                <th></th>
                <th>Avataer</th>
                <th>Title</th>    
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>

        {
            myProducts.map((d,i)=> <tr key={i}>
             <th>{i+1}</th>
              <td>
               <div className="avatar">
                 <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={d.img} />
                 </div>
                </div>
              </td>
              <td>{d.watch_name}</td>
              <td>${d.price}</td>
              <td>
                Avlabile / sold
              </td>
              <td>           
              <button onClick={()=> advertics(d)} className='btn btn-sm'>Adverrtics</button>
             <button onClick={()=> deleteProduct(d._id)} className='btn btn-sm btn-info mx-3'>delete</button>
              </td>
              
            </tr>)
        }
    </tbody>
  </table>
</div>
    </div>
    );
};

export default Myproducts;