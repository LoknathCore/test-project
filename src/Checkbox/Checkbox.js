import React, { useState } from 'react';

const Checkbox = () => {
    const [isChecked, setIsChecked] = useState(false)

    const handleChange = () => {
        setIsChecked(!isChecked)
    }


    return (
        <div className='text-white'>
            <h1 className='text-white'>Choose your option</h1>
            <input type="checkbox"
                name=""
                value=""
                checked={isChecked}
                onChange={handleChange}
            />

        </div>
    );
};

export default Checkbox;