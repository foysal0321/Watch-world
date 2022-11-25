import React from 'react';

const Addproduct = () => {
    const handleProduct=(e)=>{
        e.preventDefault()
        const form = e.target;
        const item = form.item.value;
        const price = form.price.value;
        const location = form.location.value;
        const phone = form.phone.value;
        const use = form.use.value;
        const review = form.review.value;
        const seller = form.seller.value;
        const cetagori = form.cetagori.value;
        const img = form.img.value

        const addItem={
            item: item,
            price: price,
            location: location,
            phone: phone,
            use: use,
            review: review,
            seller: seller,
            cetagori: cetagori,
            img: img
        }
        console.log(addItem);
    };

    return (
        <div>
        <h2 className='text-2xl py-2'>Add A Product</h2>
        <form onSubmit={handleProduct}> 
    <div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Product name </span>
    </label>
        <input name='item' type="text" placeholder="name" className="input input-bordered w-full max-w-xs" />        
    </div>
    <div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Product price </span>
    </label>
        <input name='price' type="number" placeholder="price" className="input input-bordered w-full max-w-xs" />        
    </div>
    <div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Location</span>
    </label>
        <input name='location' type="text" placeholder="location" className="input input-bordered w-full max-w-xs" />       
    </div>
    <div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Phone</span>
    </label>
        <input name='phone' type="text" placeholder="phone" className="input input-bordered w-full max-w-xs" />       
    </div>
    <div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Years of use </span>
    </label>
        <input name='use' type="text" placeholder="years of use" className="input input-bordered w-full max-w-xs" />       
    </div>
    <div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Review </span>
    </label>
        <input name='review' type="text" placeholder="review" className="input input-bordered w-full max-w-xs" />       
    </div>
    <div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Seller name </span>
    </label>
        <input name='seller' type="text" placeholder="seller" className="input input-bordered w-full max-w-xs" />       
    </div>
    <div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Cetagory</span>
    </label>
    <select className="select select-bordered select-ghost w-full max-w-xs"
   name='cetagori'
    >
        <option >Select cetagori</option>
              <option value="Dress">Dress</option>  
              <option value="Wood">Wood</option>  
              <option value="Sport">Sport</option>  
        </select>
    </div>
    <div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Photo</span>
    </label>
        <input name='img' type="file" placeholder="Type here" className="input input-bordered w-full max-w-xs"      
            />           
    </div>                
        <input className='btn btn-accent w-80 mt-3' type="submit" value='Add Item'/>
        </form>
    </div>
    );
};

export default Addproduct;