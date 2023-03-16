import { Component, HTMLAttributes, ReactNode } from 'react';
import style from './BigBox.module.css';

import coins from '@assets/coins.svg';
import toilet from '@assets/toilet.svg';
import paper from '@assets/toilet-paper.svg';
import shower from '@assets/shower.svg';
import soap from '@assets/soap.svg';
import spray from '@assets/spray.svg';
import star from '@assets/star.svg';

import Button from '@components/Button/Button';
import Attribute from '@components/Attribute/Attribute';

export interface BigBoxProps {
  id?: string;
  className?: string;
  src?: string;
  alt?: string;
  title?: string;
  grade?: number;
  reviewCount?: number;
  atribute1?: string;
  atribute2?: string;
  atribute3?: string;
  atribute4?: string;
  atribute5?: string;
  atribute6?: string;
  children?: HTMLAttributes<HTMLDivElement>['children'];
}

export default class BigBox extends Component<BigBoxProps> {
  render(): JSX.Element {
    return (
      <div className={[style.bigbox, this.props.className].join(' ')}>
        <img className={style.mainPhoto} src={this.props.src} alt={this.props.alt} />
        <h3>{this.props.title}</h3>
        <div className={style.grade}>
          <span>{this.props.grade}</span>
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
          <span>{this.props.reviewCount} reviews</span>
        </div>
        <div className={style.attributes}>
          <Attribute src={coins} text={this.props.atribute1}/>
          <Attribute src={toilet} text={this.props.atribute2}/>
          <Attribute src={paper} text={this.props.atribute3}/>
          <Attribute src={soap} text={this.props.atribute4}/>
          <Attribute src={shower} text={this.props.atribute5}/>
          <Attribute src={spray} text={this.props.atribute6}/>
        </div>
        <Button className={style.buttonBox} text={'rate it'}/>
      </div>
    );
  }
}
