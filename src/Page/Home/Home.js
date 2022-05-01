import React from 'react';
import Bannar from '../Bannar/Bannar';
import Categories from '../Categories/Categories';
import Header from '../Header/Header';
import Inventory from '../Inventory/Inventory';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
           <Header></Header>
           <Bannar></Bannar>
           <Inventory></Inventory>
           <Categories></Categories>
           <Reviews></Reviews>
        </div>
    );
};

export default Home;