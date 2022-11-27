import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLoaderData } from 'react-router-dom';
import CekckFrom from './CekckFrom';

const stripePromise = loadStripe('pk_test_51M5ucYJBgbucjrBLRJwaiURn5tPhnnX2eF3FJNMM9azJxeJfCNUYFzsDhT8vTEVyE0bqVNGFQZTV3A0ea2W6Le7q0086sfdYLW');

//console.log(stripePromise);

const Payment = () => {
    const booking = useLoaderData()
    const {price, item} = booking
    //console.log(booking);

    return (
        <div>
        <h3 className='text-2xl'>Payment for {item} </h3>
        <h5>pay {price}  </h5>

        <div className="w-96 my-12">
         <Elements stripe={stripePromise}>
            <CekckFrom 
            booking={booking}
            />
         </Elements>
         
        </div>
    </div>
    );
};

export default Payment;