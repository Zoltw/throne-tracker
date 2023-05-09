import React, { HTMLAttributes } from 'react';
import style from './ContentRate.module.css';

import Button from '@components/Button/Button';
import StarSection from '@components/StarSection/StarSection';
import FormQuestion from '@components/FormQuestion/FormQuestion';

interface ContentRateProps {
  id?: string;
  className?: string;
  children?: HTMLAttributes<HTMLDivElement>['children'];
}

const ContentRate: React.FC<ContentRateProps> = ({ id, className, children }) => {
  return (
    <section id={id} className={[style.contentRateSection, className].join(' ')}>
      <div className={style.rateStar}>
        <span>Rate your visit</span>
        <StarSection/>
      </div>
      <div className={style.formSection}>
        <FormQuestion text={'Was your visit free?'}/>
        <FormQuestion text={'Was it clean?'}/>
        <FormQuestion text={'Was the paper white?'}/>
        <FormQuestion text={'Was there soap?'}/>
        <FormQuestion text={'Is there a shower?'}/>
        <FormQuestion text={'Was there a nice smell?'}/>
      </div>
      <Button className={style.buttonBox} text={'submit'}/>
      {children}
    </section>
  );
};

export default ContentRate;
