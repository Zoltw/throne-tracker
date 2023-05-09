import { HTMLAttributes } from 'react';
import style from './SmallBox.module.css';

import Button from '@components/Button/Button';

interface SmallBoxProps {
  id?: string;
  className?: string;
  firstState?: string;
  text?: string;
  children?: HTMLAttributes<HTMLDivElement>['children'];
}

const SmallBox: React.FC<SmallBoxProps> = ({ className, text }) => {
  return (
    <div className={[style.smallBox, className].join(' ')}>
      <span>{text}</span>
      <Button text={'details'} />
      <Button text={'rate it'} />
    </div>
  );
};

export default SmallBox;
