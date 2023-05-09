import React, { HTMLAttributes } from 'react';
import style from './ContentReview.module.css';

import coins from '@assets/coins.svg';
import toilet from '@assets/toilet.svg';
import paper from '@assets/toilet-paper.svg';
import shower from '@assets/shower.svg';
import soap from '@assets/soap.svg';
import spray from '@assets/spray.svg';
import star from '@assets/star.svg';

import Button from '@components/Button/Button';
import Attribute from '@components/Attribute/Attribute';

interface ContentReviewProps {
  id?: string;
  className?: string;
  title?: string;
  grade?: number;
  reviewCount?: number;
  hours?: string;
  atribute1?: string;
  atribute2?: string;
  atribute3?: string;
  atribute4?: string;
  atribute5?: string;
  atribute6?: string;
  children?: HTMLAttributes<HTMLDivElement>['children'];
}

const ContentReview: React.FC<ContentReviewProps> = ({
  id,
  className,
  title,
  grade,
  reviewCount,
  hours,
  atribute1,
  atribute2,
  atribute3,
  atribute4,
  atribute5,
  atribute6,
  children }) => {
  return (
    <section id={id} className={[style.contentReviewSection, className].join(' ')}>
      <h3>{title}</h3>
      <div className={style.grade}>
        <span>{grade}</span>
        <div className={style.starsContainer}>
          <span className={style.star} id={'first'}>
            <img src={star}/>
          </span>
          <span className={style.star} id={'second'}>
            <img src={star}/>
          </span>
          <span className={style.star} id={'third'}>
            <img src={star}/>
          </span>
          <span className={style.star} id={'fourth'}>
            <img src={star}/>
          </span>
          <span className={style.star} id={'fifth'}>
            <img src={star}/>
          </span>
        </div>
        <span>{reviewCount} reviews</span>
        <span className={style.hours}>{hours}</span>
      </div>
      <div className={style.attributes}>
        <Attribute src={coins} text={atribute1}/>
        <Attribute src={toilet} text={atribute2}/>
        <Attribute src={paper} text={atribute3}/>
        <Attribute src={soap} text={atribute4}/>
        <Attribute src={shower} text={atribute5}/>
        <Attribute src={spray} text={atribute6}/>
      </div>
      <Button className={style.buttonBox} text={'rate it'}/>
      {children}
    </section>
  );
};

export default ContentReview;
