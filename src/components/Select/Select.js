import React from 'react';

const Select = (register) => {
    return (
        <select {...register}>
            <option value="male">Male</option>
            <option value="female">female</option>
            <option value="others">Others</option>
        </select>
    );
};

export default Select;