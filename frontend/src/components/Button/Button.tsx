import React from 'react';
import style from './Button.module.css';

interface ButtonProps {
  text: string;
  width?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  id?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, width, onClick, type, className, id }) => {
  return (
    <button
      className={[style.button, className].join(' ')}
      style={{ width: width }}
      onClick={onClick}
      type={type}
      id={id}>
      {text}
    </button>
  );
};

export default Button;
