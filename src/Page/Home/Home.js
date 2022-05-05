import React from 'react';
import Bannar from '../Bannar/Bannar';
import Categories from '../Categories/Categories';
import Inventory from '../Inventory/Inventory';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
          
           <Bannar></Bannar>
           <Inventory></Inventory>
           <Categories></Categories>
           <Reviews></Reviews>
        </div>
    );
};

export default Home;