import React, { useEffect, useState } from 'react';
import '../Dress/Dress.css'
import { FcApproval } from "react-icons/fc";
import { useQuery } from '@tanstack/react-query';
import { useLoaderData } from 'react-router-dom';
import Dresscard from './Dresscard';
import Modal from '../booking/Modal';
import Myproducts from './Myproducts';
import ItemDetails from './ItemDetails';

const Dresswatch = () => {
    const data = useLoaderData()

    return (
        <div>
           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {
            data.map((d,i) => 
            <Dresscard 
            key={i}
            data={d}
            />
             )      
            }
         </div>
       
        </div>
    );
};

export default Dresswatch;      
  