import React, { useEffect, useState } from 'react';
import Inventor from '../Inventor/Inventor';

import './Inventory.css'

const Inventory = () => {
    const [inventory, setInventory] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [])
    return (
        <div id='inventory' className='container'>


            <h1 className='text-center text-success my-4'>Inventory</h1>
            <div className="inventory">
                {
                    inventory.slice(0, 6).map(inventor => <Inventor
                        key={inventor.id}
                        inventor={inventor}
                    ></Inventor>)
                }
            </div>
        </div>
    );
};

export default Inventory;