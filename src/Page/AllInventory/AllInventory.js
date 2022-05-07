import React, { useEffect, useState } from 'react';
import Allinventor from '../Allinventor/Allinventor';
import './Allinventory.css'

const AllInventory = () => {
    const [allinventory, setAllinventory] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/catagori')
            .then(res => res.json())
            .then(data => setAllinventory(data))
    }, [])
    return (
        <div id='shahin'>
            <div className="inventory">
                {
                    allinventory.map(inventor => <Allinventor
                        key={inventor._id}
                        inventor={inventor}
                    ></Allinventor>)
                }
            </div>
        </div>
    );
};

export default AllInventory;