import React from 'react';
import style from './Attribute.module.css';

interface AttributeProps {
  text?: string;
  src: string;
  alt?: string;
}

const Attribute: React.FC<AttributeProps> = ({ text, src, alt }) => {
  return (
    <div className={style.attributeComp}>
      <img className={style.attributeImg} src={src} alt={alt}/>
      <span>{text}</span>
    </div>
  );
};

export default Attribute;
