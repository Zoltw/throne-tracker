import React from 'react';
import style from './FormQuestion.module.css';

import Xmark from '@assets/xmark.svg';
import Checkmark from '@assets/checkmark.svg';

interface FormQuestionProps {
  idNo?: string;
  idYes?: string;
  text: string;
  className?: string;
}

const FormQuestion: React.FC<FormQuestionProps> = ({ idNo, idYes, text, className }) => {
  return (
    <div className={[style.formQuest, className].join(' ')}>
      <span>{text}</span>
      <div>
        <img className={style.checkButton} src={Xmark} alt=""/>
        <input
          type="checkbox"
          id={idNo}
        />
        <img className={style.checkButton} src={Checkmark} alt=""/>
        <input
          type="checkbox"
          id={idYes}
        />
      </div>
    </div>
  );
};

export default FormQuestion;
