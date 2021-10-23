import React, { useState } from 'react';
import Rating from "react-rating-stars-component";

//Component
import ReviewModal from './ReviewModal';

const AddReviewCard = () => {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => setIsOpen(true);

    const handleRating =(value) =>{
        console.log(value);
    }
    return (
        <>
            <div>
                <ReviewModal isOpen={isOpen} setIsOpen={setIsOpen}/>
                <h3 className="text-xl font-medium">Rate Your Experience</h3>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                            <label htmlFor="dining">Dining</label>
                            <input type="radio" name="review" id="dining"/>
                        </div>
                        <div className="flex items-center gap-2">
                            <label htmlFor="delivery">Delivery</label>
                            <input type="radio" name="review" id="delivery"/>
                        </div>
                    </div>
                        <div>
                            <Rating count={5} onChange={handleRating} size={24}/>
                        </div>
                        <button onClick={openModal} className="text-zomato-400">Write a review</button>
            </div>
        </>
    )
}

export default AddReviewCard;
