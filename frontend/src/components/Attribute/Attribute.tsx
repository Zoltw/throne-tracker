import { Component } from 'react';

import style from './Attribute.module.css';


export interface AttributeProps {
  text?: string;
  src: string;
  alt?: string;
}

export default class Attribute extends Component<AttributeProps> {
  render(): JSX.Element {
    return (
      <div className={style.attributeComp}>
        <img className={style.attributeImg} src={this.props.src} alt={this.props.alt}/>
        <span>{this.props.text}</span>
      </div>
    );
  }
}

