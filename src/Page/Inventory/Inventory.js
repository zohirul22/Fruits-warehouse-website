import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Inventor from '../Inventor/Inventor';

import './Inventory.css'

const Inventory = () => {
    const [inventory, setInventory] = useState([]);

    const navigate = useNavigate();

    const navigateUpdate = (id) => {
        navigate(`/inventor/`)
    }

    useEffect(() => {
        fetch('http://localhost:5000/catagori')
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [])
    return (
        <div id='inventory' className='container'>
            <h1 className='text-center text-success my-4'>Inventory</h1>
            <div className="inventory">
                {
                    inventory.slice(0, 6).map(inventor => <Inventor
                        key={inventor._id}
                        inventor={inventor}
                    ></Inventor>)
                }
            </div>
            <div className='allinventor'>
                <button onClick={() => navigateUpdate()} className='btn btn-primary w-25'>All inventory...</button>
            </div>
        </div>
    );
};

export default Inventory;