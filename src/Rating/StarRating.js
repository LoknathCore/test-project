import React, { useState } from 'react';
import Star from './Star';

const StarRating = () => {
    const [rating, setRating] = useState(0)
    console.log(rating)

    const changeRating = (newRating) => {
        console.log(newRating)

    }
    return (
        <div>
            {
                [1, 2, 3, 4, 5].map((value) => (
                    <Star
                        key={value}
                        filled={value <= rating}
                        onclick={() => changeRating(value)}
                    />
                ))
            }


        </div>
    );
};

export default StarRating;