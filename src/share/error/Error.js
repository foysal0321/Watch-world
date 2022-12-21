import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import '../error/Err.css'

const Error = () => {
    const error = useRouteError()
    return (
        <div className='notfound'>
            <img className='' src="https://drudesk.com/sites/default/files/2018-02/404-error-page-not-found.jpg" alt="" />
            <div className="mt-8">
            <h4 className='text-red text-2xl text-center'>Something wrong.!</h4>
            <h6 className='text-red  text-center'>{error.statusText || error.message}</h6>
            <h1 className='text-center py-3'>Back to <Link to='/'><button className='btn btn-sm '>Home</button> </Link></h1>
            </div>
        </div>
    );
};

export default Error;