import React from 'react';
import '../section/Section.css'


const Section = () => {
    return (
  <div className='py-8'>
    <div className="hero sections " style={{ backgroundImage: `url("https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-2/3">
            <h4 className='text-2xl font-bold text-fuchsia-500'>2021 SEASON SALE</h4>
            <p className="mb-5 text-5xl font-bold">Save up to 50% off <br /> on all order</p>
            <button className="btn btn-primary">Shop Now</button>
            </div>
        </div>
    </div>
</div>
    );
};

export default Section;