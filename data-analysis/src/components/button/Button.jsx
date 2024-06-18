import React from "react";
import "./button.scss";

const Button = ({ value, type, link }) => {
    return (
        <a href={link} className={`btn btn-${type}`}>
            {value}
        </a>
    );
};

export default Button;
