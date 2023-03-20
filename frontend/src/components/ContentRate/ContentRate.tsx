import { Component, HTMLAttributes } from 'react';
import style from './ContentRate.module.css';

import Button from '@components/Button/Button';
import StarSection from '@components/StarSection/StarSection';
import FormQuestion from '@components/FormQuestion/FormQuestion';

export interface ContentRateProps {
  id?: string;
  className?: string;
  children?: HTMLAttributes<HTMLDivElement>['children'];
}

export default class ContentRate extends Component<ContentRateProps> {
  render(): JSX.Element {
    return (
      <section className={[style.contentRateSection, this.props.className].join(' ')}>
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
      </section>
    );
  }
}
