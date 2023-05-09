import React, { HTMLAttributes } from 'react';
import style from './BigBox.module.css';

interface BigBoxProps {
  id?: string;
  className?: string;
  src: string;
  alt?: string;
  children: HTMLAttributes<HTMLDivElement>['children'];
}

const BigBox: React.FC<BigBoxProps> = ({ id, className, src, alt, children }) => {
  return (
    <div id={id} className={[style.bigbox, className].join(' ')}>
      <img className={style.mainPhoto} src={src} alt={alt} />
      {children}
    </div>
  );
};

export default BigBox;
