import React, { HTMLAttributes, useEffect, useState } from 'react';
import style from './BigBox.module.css';

interface BigBoxProps {
  id?: string;
  className?: string;
  src: string;
  alt?: string;
  children: HTMLAttributes<HTMLDivElement>['children'];
}

const BigBox: React.FC<BigBoxProps> = ({ id, className, src, alt, children }) => {
  const [photo, setPhoto] = useState<string>('');

  useEffect(() => {
    const fetchPhoto = async () => {
      const response = await fetch(`http://localhost:8080/proxy/${encodeURIComponent(src)}`);
      if (response.ok) {
        setPhoto(src);
      }
    };
    fetchPhoto();
  }, [src]);

  return (
    <div id={id} className={[style.bigbox, className].join(' ')}>
      <img className={style.mainPhoto} src={photo} alt={alt} />
      {children}
    </div>
  );
};

export default BigBox;
