import { Component } from 'react';

import style from './Button.module.css';


export interface ButtonProps {
  text: string;
  width?: string;
  onClick?: () => void;
  className?: string;
  id?: string;
}

export default class Button extends Component<ButtonProps> {
  render(): JSX.Element {
    return (
      <button
        className={[style.button, this.props.className].join(' ')}
        style={{ width: this.props.width }}
        onClick={this.props.onClick}
        type={'button'}
        id={this.props.id}>
        {this.props.text}
      </button>
    );
  }
}

