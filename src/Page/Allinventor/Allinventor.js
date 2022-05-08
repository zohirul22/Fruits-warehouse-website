import React, { useState } from 'react';
import './Allinventor.css'

const Allinventor = ({ inventor }) => {
    const [allinventory, setAllinventory] = useState([]);
    const {_id, img, name, price, quantity, supplier, description } = inventor;

    const handelDelete =id=>{
        const proceed =window.confirm("Are you sure delete?");
        if(proceed){
            const url =`http://localhost:5000/catagori/${id}`;
            fetch(url , {
                method:'DELETE',
            })
            .then(res =>res.json())
            .then(data =>console.log(data))

           const remaing =allinventory.filter(inventor =>inventor._id !== id);
            setAllinventory(remaing);
        }
    }

    return (
        <div className="">
            <div className='inventor  shadow-lg  mb-5 bg-white rounded'>
                <img style={{ width: "150px" }} src={img} alt="" />
                <h2 className='text-primary'>{name}</h2>
                <h3 className='text-secondary'>Quantity:{quantity}</h3>
                <h4 className='text-primary'>Rs.{price}</h4>
                <h5>Supplier Name:{supplier}</h5>
                <p><small>{description}</small></p>
                <button onClick={()=>handelDelete(_id)} className='btn btn-danger w-25'>Delete</button>
            </div>

        </div>
    );
};

export default Allinventor;