import React from 'react';
import './Categori.css'

const Categori = ({ categori }) => {
    const { img, name } = categori;
    return (
        <div className='categori  shadow-lg  mb-5 bg-white rounded'>
            <img style={{ width: "150px" }} src={img} alt="" />
            <h2>Name:{name}</h2>

        </div>
    );
};

export default Categori;