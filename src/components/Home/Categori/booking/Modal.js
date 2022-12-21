import React, { useContext, useState } from 'react';
import { Authcontext } from '../../../../useContext/Context';
import toast, { Toaster } from 'react-hot-toast';

const Modal = ({data,setmodal}) => {
    const {user} = useContext(Authcontext)
    const { watch_name, location,resale_price, img} = data;
    const [disa,setdisa] = useState(true)
    //console.log(disa);
//console.log(data);
    const bookingBtn =(e)=>{
        e.preventDefault();
        const form = e.target;
         const name = form.name.value;
        const email = form.email.value;
        const location = form.location.value;
        const phone = form.phone.value;

        const booking ={
            item: watch_name,
            buyer: name,
            email: email,
            price: resale_price,
            phone: phone,
            location: location,
            image: img
        }
// 
        fetch(`https://watch-world.vercel.app/booking`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{         
            if(data.acknowledged){
                 toast.success('Success booking')
                  setdisa(false)
                setmodal(null)
                //refetch()
               
                //console.log(data);
            }
            else{
               alert(data.message)
                console.log(data.message);
            }          
        })
    }
    return (
        <>
           <input type="checkbox" id="booking-modal" className="modal-toggle" />
         <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">Item: {watch_name}</h3>
                <form onSubmit={bookingBtn} className='grid grid-cols-1 gap-3 mt-10'>                         
                <input name='name' readOnly defaultValue={user?.displayName} type="text" placeholder="Your name" className="input input-bordered w-full " />
                <input name='email' readOnly value={user?.email} type="email" placeholder="Your email" className="input input-bordered w-full " />
                <input name='price' readOnly  type="text" value={`$${resale_price}`} className="input input-bordered w-full " />
                <input name='phone' type="number" placeholder="Your phone" className="input input-bordered w-full " /> 
                <input name='location' type="text" placeholder="Location" className="input input-bordered w-full " /> 
                <input type="submit" value="Submit" className=' w-full btn btn-accent text-white '/>
                
                </form>
            </div>
            </div> 
        </>
    );
};

export default Modal;