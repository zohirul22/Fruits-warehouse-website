import React from 'react';
import './Review.css'

const Review = ({review}) => {
    const {name,img,Rating,title,Purchased,date,description} =review;
    return (
        <div className='review container  shadow-lg mb-5 bg-white rounded'>
           <img  style={{width:"200px"}} src={img} alt="" />
           <h1>Name:{name}</h1>
           <h3 className='text-danger'>Rating:{Rating}</h3>
           <h2>title:{title}</h2>
           <p><span className='text-secondary'>Purchased</span>:{Purchased}</p>
           <p>{description}</p>
           <h2 className='text-warning'>{date}</h2>
        </div>
    );
};

export default Review;