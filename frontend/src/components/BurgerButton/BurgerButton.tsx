import { Component } from 'react';

import style from './BurgerButton.module.css';
import burger from '@assets/burger.svg';


export interface BurgerButtonProps {
  className?: string;
  id?: string;
  onClick?: () => void;
}

export default class BurgerButton extends Component<BurgerButtonProps> {
  render(): JSX.Element {
    return (
      <span className={style.shadow}>
        <button
          className={[style.button, this.props.className].join(' ')}
          onClick={this.props.onClick}
          type={'button'}
          id={this.props.id}>
          <img className={style.burger} src={burger}/>
        </button>
      </span>
    );
  }
}

