import { HTMLAttributes } from 'react';
import style from './SmallBox.module.css';

import Button from '@components/Button/Button';

interface SmallBoxProps {
  id?: string;
  className?: string;
  firstState?: string;
  text?: string;
  onDetailsClick?: () => void;
  children?: HTMLAttributes<HTMLDivElement>['children'];
}

const SmallBox: React.FC<SmallBoxProps> = ({ className, text, onDetailsClick }) => {
  return (
    <div className={[style.smallBox, className].join(' ')}>
      <span>{text}</span>
      <Button text={'details'} onClick={onDetailsClick}/>
      <Button text={'rate it'} />
    </div>
  );
};

export default SmallBox;
