import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UpdataPage.css'

const Updatepage = ({ name }) => {
    const { inventorId } = useParams();
    const [inventor, setInventor] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/catagori/${inventorId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setInventor(data));


    }, [])

    return (
        <div className='text-center all-inventor'>
            <img style={{ width: "200px" }} src={inventor.img} alt="" />
            <h1 className='text-success'>Name:{inventor.name}</h1>
            <h2 className='text-info'>Supplier:{inventor.supplier}</h2>
            <h3 className='text-primary'>Rs:{inventor.price}</h3>
            <h4 className='text-danger'>Quantity:{inventor.quantity}</h4>
            <h5 className=''>Description:{inventor.description}</h5>


        </div>
    );
};

export default Updatepage;