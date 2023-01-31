import React, { useEffect, useState } from 'react'
import Review from './Review'
import axios from 'axios';

const ReviewLists = () => {
    const [review, setReview] = useState({});

    const getReviewAPI = () => {
        axios.get("/getreviews")
            .then(res => {
                setReview(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }


    const removeDeletedReviews=(id)=>{
        setReview(review.filter((c)=>c.id!==id))
    }


    useEffect(() => {
        getReviewAPI();
    }, [])



    return (
        <div className='text-center'>
            <br />
            <h1>All College Reviews</h1>

            {
                review.length > 0 ? review.map((item) => (
                    <Review key={item.id} review={item} update={removeDeletedReviews} />

                )) : "No Review Avialable"
            }


        </div>
    )
}

export default ReviewLists
