import React, { useEffect, useState } from 'react';

const Useseller = (email) => {
    const [isSeller,setSeller] = useState(false)
    const [sellerLoding,setsellerLoding] = useState(true)

    useEffect(()=>{
        fetch(`https://watch-world.vercel.app/users/seller/${email}`)
        .then(res=>res.json())
        .then(data=>{
           // console.log(data);
            setSeller(data.isSeller)
            setsellerLoding(false)
        })
    },[email])
    return [isSeller, sellerLoding]
    
};
 
export default Useseller;