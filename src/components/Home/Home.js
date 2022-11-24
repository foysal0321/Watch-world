import React from 'react';
import Bannar from './bannar/Bannar';
import Categori from './Categori/Categori';
import Dresswatch from './Categori/Dress/Dresswatch';
import Section from './section/Section';

const Home = () => {
    return (
        <div>
            <Bannar />
             <Categori />
            
            <Section />
           
        </div>
    );
};

export default Home;