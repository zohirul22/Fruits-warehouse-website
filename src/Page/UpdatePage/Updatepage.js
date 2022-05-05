import React from 'react';
import { useParams } from 'react-router-dom';

const Updatepage = ({name}) => {
    const {inventorId} =useParams();
    return (
        <div>
            <h1 className='my-5'>hellow bangladesh:{inventorId}</h1>
            <p>{name}</p>
        </div>
    );
};

export default Updatepage;