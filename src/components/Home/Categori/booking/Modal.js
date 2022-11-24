import React, { useContext } from 'react';
import { Authcontext } from '../../../../useContext/Context';

const Modal = ({data,setmodal}) => {
    const {user} = useContext(Authcontext)
    const { watch_name, location,resale_price, } = data;
//console.log(data);
    const bookingBtn =(e)=>{
        e.preventDefault()
       //console.log(_id);
    }
    return (
        <>
           <input type="checkbox" id="booking-modal" className="modal-toggle" />
         <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">{watch_name}</h3>
                <form onSubmit={bookingBtn} className='grid grid-cols-1 gap-3 mt-10'>
                <input type="text"  className="input input-bordered w-full " />
               
                <input name='name' readOnly defaultValue={user?.displayName} type="text" placeholder="Your name" className="input input-bordered w-full " />
                <input name='email' readOnly value={user?.email} type="email" placeholder="Your email" className="input input-bordered w-full " />
                <input name='price' readOnly  type="text" className="input input-bordered w-full " />
                <input name='price' readOnly  type="text" value={resale_price} className="input input-bordered w-full " />
                <input name='phone' type="number" placeholder="Your phone" className="input input-bordered w-full " /> 
                <input type="submit" value="Submit" className=' w-full btn btn-accent'/>
                </form>
            </div>
            </div> 
        </>
    );
};

export default Modal;