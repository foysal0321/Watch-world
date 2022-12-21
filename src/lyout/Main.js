import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../share/footer/Footer';
import Navbar from '../share/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;