import React, { FC } from 'react';
import "./Button.scss"

interface ButtonProps {
  href: string;
  label: string;
  title: string
}

const Button: FC<ButtonProps> = (props) => {
  return (
    <a href={props.href} className="btn" title={props.title}>
      {props.label}
    </a>
  );
}

export default Button;