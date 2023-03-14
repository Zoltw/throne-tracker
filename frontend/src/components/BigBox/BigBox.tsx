import { Component, HTMLAttributes, ReactNode } from 'react';
import style from './BigBox.module.css';

import coins from '../../assets/coins.svg';
import toilet from '../../assets/toilet.svg';
import paper from '../../assets/toilet-paper.svg';
import shower from '../../assets/shower.svg';
import soap from '../../assets/soap.svg';
import spray from '../../assets/spray.svg';

import Button from '../Button/Button';

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
        <img src={this.props.src} alt={this.props.alt} />
        <h3>{this.props.title}</h3>
        <div className={style.grade}>
          <span>{this.props.grade}</span>
          <div className={style.starsContainer}>
            <span className={style.star} id={'first'}></span>
            <span className={style.star} id={'second'}></span>
            <span className={style.star} id={'third'}></span>
            <span className={style.star} id={'fourth'}></span>
            <span className={style.star} id={'fifth'}></span>
          </div>
          <span>{this.props.reviewCount} reviews</span>
        </div>
        <div className={style.attributes}>
          <img src={coins}/>
          <span>{this.props.atribute1}</span>
          <img src={toilet}/>
          <span>{this.props.atribute2}</span>
          <img src={paper}/>
          <span>{this.props.atribute3}</span>
          <img src={soap}/>
          <span>{this.props.atribute4}</span>
          <img src={shower}/>
          <span>{this.props.atribute5}</span>
          <img src={spray}/>
          <span>{this.props.atribute6}</span>
        </div>
        <Button text={'rate it'}/>
      </div>
    );
  }
}
