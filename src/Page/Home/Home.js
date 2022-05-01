import React from 'react';
import Bannar from '../Bannar/Bannar';
import Header from '../Header/Header';
import Inventory from '../Inventory/Inventory';

const Home = () => {
    return (
        <div>
           <Header></Header>
           <Bannar></Bannar>
           <Inventory></Inventory>
        </div>
    );
};

export default Home;