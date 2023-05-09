import { FC } from 'react';
import style from './StarSection.module.css';

import star from '@assets/star.svg';

interface StarSectionProps {
  id?: string;
  className?: string;
}

const StarSection: FC<StarSectionProps> = ({ className }) => {
  return (
    <section className={[style.starsSect, className].join(' ')}>
      <span id={'first'}>
        <img className={style.star} src={star}/>
      </span>
      <span id={'second'}>
        <img className={style.star} src={star}/>
      </span>
      <span id={'third'}>
        <img className={style.star} src={star}/>
      </span>
      <span id={'fourth'}>
        <img className={style.star} src={star}/>
      </span>
      <span id={'fifth'}>
        <img className={style.star} src={star}/>
      </span>
    </section>
  );
};

export default StarSection;
