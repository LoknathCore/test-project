import React from 'react'

export const InputField = ({ type, name, value, placeholder }) => {

    return (
        <div>
            { }
            <input
                type={type}
                name={name}
                value={value}
                className='form-control'
                placeholder={placeholder}
            />
        </div>
    )
}
