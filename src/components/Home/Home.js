import React from 'react';
import Advertis from './advertised/Advertis';
import Bannar from './bannar/Bannar';
import Categori from './Categori/Categori';
import Dresswatch from './Categori/Dress/Dresswatch';
import Section from './section/Section';

const Home = () => {
    return (
        <div>
            <Bannar />
             <Categori />
            <Advertis />
            <Section />
           
        </div>
    );
};

export default Home;