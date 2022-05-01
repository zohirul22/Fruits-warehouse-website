import React from 'react';
import './Inventor.css'

const Inventor = ({inventor}) => {
    const {img , name ,price,quantity, supplier ,description} = inventor;
    return (
        <div className='inventor   shadow-lg p-3 mb-5 bg-white rounded'>
    
       <img style={{width:"150px"}} src={img} alt="" />
       <h2 className='text-primary'>{name}</h2>
       <h3 className='text-secondary'>Quantity:{quantity}</h3>
       <h4 className='text-primary'>Rs.{price}</h4>
       <h5>Supplier Name:{supplier}</h5>
       <p><small>{description}</small></p>
     
   </div>
    );
};

export default Inventor;