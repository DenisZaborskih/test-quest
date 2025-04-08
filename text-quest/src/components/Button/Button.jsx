import React from "react";
import './Button.css';

const Button = ({onclick, children}) => {
    return (
        <button className="custom-button" onclick={onClick}>
            {children}
        </button>
    )
}

export default Button;