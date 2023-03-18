
import { Component } from 'react';
import style from './FormQuestion.module.css';

import Xmark from '@assets/xmark.svg';
import Checkmark from '@assets/checkmark.svg';

export interface FormQuestionProps {
  idNo?: string;
  idYes?: string;
  text: string;
  className?: string;
}

export default class FormQuestion extends Component<FormQuestionProps> {
  render(): JSX.Element {
    return (
      <div className={[style.formQuest, this.props.className].join(' ')}>
        <span>{this.props.text}</span>
        <div>
          <img className={style.checkButton} src={Xmark} alt=""/>
          <input
            type="checkbox"
            id={this.props.idNo}
          />
          <img className={style.checkButton} src={Checkmark} alt=""/>
          <input
            type="checkbox"
            id={this.props.idYes}
          />
        </div>
      </div>
    );
  }
}
