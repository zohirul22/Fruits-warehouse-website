import React from 'react';
import Bannar from '../Bannar/Bannar';
import Categories from '../Categories/Categories';
import Header from '../Header/Header';
import Inventory from '../Inventory/Inventory';

const Home = () => {
    return (
        <div>
           <Header></Header>
           <Bannar></Bannar>
           <Inventory></Inventory>
           <Categories></Categories>
        </div>
    );
};

export default Home;