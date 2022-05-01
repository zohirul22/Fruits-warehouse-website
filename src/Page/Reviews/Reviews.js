import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews ,setReviews] =useState([]);
    useEffect(()=>{
        fetch('review.json')
        .then(res =>res.json())
        .then(data =>setReviews(data))
    } ,[])
    return (
        <div id='reviews'>
            <h1 className='text-center text-success'>Review</h1>
            <h3  className='text-center text-primary my-4 fs-1'>GOOD WORDS. GOOD PEOPLE.</h3>
           <div className="reviews">
           {
                reviews.map(review => <Review 
                    key={review.id }
                review ={review}
                ></Review>)
            }
           </div>
        </div>
    );
};

export default Reviews;