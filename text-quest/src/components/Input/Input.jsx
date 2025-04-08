import React, { useState } from "react";
import './Input.css';

const Input = ({ placeholder, onChange }) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
        if (onChange) onChange(e.target.value);
    }

    return (
        <inpit
            type='text'
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            className='custom-input'
            
        />
    );
}
export default Input;