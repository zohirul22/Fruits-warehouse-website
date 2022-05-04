import React from 'react';
import { useParams } from 'react-router-dom';

const Updatepage = () => {
    const {inventorId} =useParams();
    return (
        <div>
            <h1 className='my-5'>hellow bangladesh:{inventorId}</h1>
        </div>
    );
};

export default Updatepage;