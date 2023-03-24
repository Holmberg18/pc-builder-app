import React from 'react';
import "./Button.scss";
const Button = (props) => {
    return (React.createElement("a", { href: props.href, className: "btn", title: props.title }, props.label));
};
export default Button;
