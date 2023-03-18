import { Component, HTMLAttributes } from 'react';
import style from './BigBox.module.css';

export interface BigBoxProps {
  id?: string;
  className?: string;
  src: string;
  alt?: string;
  children: HTMLAttributes<HTMLDivElement>['children'];
}

export default class BigBox extends Component<BigBoxProps> {
  render(): JSX.Element {
    return (
      <div className={[style.bigbox, this.props.className].join(' ')}>
        <img className={style.mainPhoto} src={this.props.src} alt={this.props.alt} />
        {this.props.children}
      </div>
    );
  }
}
