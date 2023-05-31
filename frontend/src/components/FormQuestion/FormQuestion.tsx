import { useState } from 'react';
import style from './FormQuestion.module.css';

import Xmark from '@assets/xmark.svg';
import XmarkChecked from '@assets/xmark-checked.svg';
import Checkmark from '@assets/checkmark.svg';
import CheckmarkChecked from '@assets/checkmark-checked.svg';

interface FormQuestionProps {
  idNo?: string;
  idYes?: string;
  text: string;
  className?: string;
  onClick?: () => void;
}

const FormQuestion: React.FC<FormQuestionProps> = ({ idNo, idYes, text, className }) => {
  const [isCheckedYes, setCheckedYes] = useState(false);
  const [isCheckedNo, setCheckedNo] = useState(false);

  const handleCheckboxYes = () => {
    setCheckedYes(true);
    setCheckedNo(false);
  };

  const handleCheckboxNo = () => {
    setCheckedNo(true);
    setCheckedYes(false);
  };

  return (
    <div className={[style.formQuest, className].join(' ')}>
      <span>{text}</span>
      <div>
        <span
          className={`${style.checkButton} ${isCheckedNo ? style.active : ''}`}
          onClick={handleCheckboxNo}
        >
          <img src={isCheckedNo ? XmarkChecked : Xmark} />
        </span>
        <input className={style.checkbox}
          type="checkbox"
          id={idNo}
          checked={isCheckedNo}
          readOnly
        />
        <span
          className={`${style.checkButton} ${isCheckedYes ? style.active : ''}`}
          onClick={handleCheckboxYes}
        >
          <img src={isCheckedYes ? CheckmarkChecked : Checkmark} />
        </span>
        <input
          className={style.checkbox}
          type="checkbox"
          id={idYes}
          checked={isCheckedYes}
          readOnly
        />
      </div>
    </div>
  );
};

export default FormQuestion;
