
import { Component } from 'react';
import style from './StarSection.module.css';

import star from '@assets/star.svg';

export interface StarSectionProps {
  id?: string;
  className?: string;
}

export default class StarSection extends Component<StarSectionProps> {
  render(): JSX.Element {
    return (
      <section className={[style.starsSect, this.props.className].join(' ')}>
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
  }
}
