import React, { useState } from "react";
import './Input.css';

const Input = ({ placeholder, onChange }) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
        if (onChange) onChange(e.target.value);
    }

    return (
        <label className="custom-label">
            Сообщение
            <input
                type='text'
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                className='custom-input'
            
            />
        </label>
    );
}
export default Input;