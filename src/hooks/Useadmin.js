import React, { useEffect, useState } from 'react';

const Useadmin = (email) => {
    const [isadmin,setisadmn] = useState(false)
    const [adminLoding,setadminLoding] = useState(true)

    useEffect(()=>{
        fetch(`http://localhost:5000/users/admin/${email}`)
        .then(res=>res.json())
        .then(data=>{
           // console.log(data);
            setisadmn(data.isAdmin)
            setadminLoding(false)
        })
    },[email])
    return [isadmin, adminLoding]
};

export default Useadmin;