import React from 'react';
import './Categori.css'

const Categori = ({ categori }) => {
    const {_id, img, name } = categori;
    return (
        <div className='categori container  shadow-lg  mb-5 bg-white rounded'>
            <img style={{ width: "150px" }} src={img} alt="" />
            <p>Name:{name}</p>

        </div>
    );
};

export default Categori;