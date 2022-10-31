import React from 'react';
import { FaStar } from 'react-icons/fa';

const Star = ({ filled, onclick }) => {
    return (
        <div>
            <FaStar
                color={filled ? 'orange' : 'lightgray'}
                onClick={onclick}

            />

        </div>
    );
};

export default Star;