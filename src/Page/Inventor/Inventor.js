import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventor.css'

const Inventor = ({ inventor }) => {
    const { _id, img, name, price, quantity, supplier, description } = inventor;
    const navigate = useNavigate();

    const navigateUpdate = (id) => {
        navigate(`/inventor/${id}`)
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
            <button onClick={() => navigateUpdate(_id)} className='btn btn-info'>Stock Update :{name}</button>

        </div>

       </div>
      
    );

   
   
};

export default Inventor;