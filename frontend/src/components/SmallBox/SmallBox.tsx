import { Component, HTMLAttributes } from 'react';
import style from './SmallBox.module.css';

import Button from '@components/Button/Button';

export interface BigBoxProps {
  id?: string;
  className?: string;
  text?: string;
  children?: HTMLAttributes<HTMLDivElement>['children'];
}

export default class BigBox extends Component<BigBoxProps> {
  render(): JSX.Element {
    return (
      <div className={[style.smallBox, this.props.className].join(' ')}>
        <span>{this.props.text}</span>
        <Button text={'details'} />
        <Button text={'rate it'} />
      </div>
    );
  }
}
