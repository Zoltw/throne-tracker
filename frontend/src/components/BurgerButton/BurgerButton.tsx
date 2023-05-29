import React from 'react';
import style from './BurgerButton.module.css';

interface BurgerButtonProps {
  className?: string;
  id?: string;
  onClick?: () => void;
  src?: string;
}

const BurgerButton: React.FC<BurgerButtonProps> = ({ className, id, onClick, src }) => {
  return (
    <span className={className}>
      <button
        className={style.button}
        onClick={onClick}
        type={'button'}
        id={id}>
        <img className={style.burger} src={src}/>
      </button>
    </span>
  );
};

export default BurgerButton;
