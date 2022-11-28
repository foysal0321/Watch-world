import React from 'react';
import '../bannar/Banner.css'

const Bannar = () => {
    return (

    <div className="carousel w-full sliders">   
      <div id="slide1" className="carousel-item relative w-full slidee">
      <div className="carosel-img">
       <img src="https://images.unsplash.com/photo-1604242692760-2f7b0c26856d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" className="w-full " />
     </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5  right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
     </div>
    <div className="absolute w-2/5 lg:left-28  top-1/4 info ">
        <h5 className='text-1xl font-bold text-white py-2'>MAM ORIGINALS</h5>
      <h2 className='text-4xl font-bold text-white py-2 '>
      Unique Watches
      </h2>
      <p className='text-white py-3'>You do know that they don’t want you to have lunch. <br /> I’m keeping it real with you</p>
       <button className="btn btn-warning mt-3 mr-5">Discover Now</button>
    </div>
  </div> 

  <div id="slide2" className="carousel-item relative w-full">
    <div className="carosel-img">
       <img src="https://i.insider.com/589226e0713ba138058b5f67?width=700&format=jpeg&auto=webp" className="w-full" />
    </div> 
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
    <div className="absolute w-2/5 lg:left-28  top-1/4 info ">
    <h5 className='text-1xl font-bold text-white py-2'>MAM ORIGINALS</h5>
      <h2 className='text-4xl font-bold text-white py-2 '>
      Unique Watches
      </h2>
      <p className='text-white py-3'>You do know that they don’t want you to have lunch. <br /> I’m keeping it real with you</p>
       <button className="btn btn-warning mt-3 mr-5">Discover Now</button>
    </div>
  </div> 

  <div id="slide3" className="carousel-item relative w-full">
    <div className="carosel-img">
      <img src="https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="w-full" />
    </div>  
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
     </div>
    <div className="absolute w-2/5 lg:left-28 top-1/4 info ">
    <h5 className='text-1xl font-bold text-white py-2'>MAM ORIGINALS</h5>
      <h2 className='text-4xl font-bold text-white py-2 '>
      Unique Watches
      </h2>
      <p className='text-white py-3'>You do know that they don’t want you to have lunch. <br /> I’m keeping it real with you</p>
       <button className="btn btn-warning mt-3 mr-5">Discover Now</button>
    </div>
  </div> 
</div>
    );
};

export default Bannar;




