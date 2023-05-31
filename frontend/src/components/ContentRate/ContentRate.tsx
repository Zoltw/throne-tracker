import React, { HTMLAttributes, useState } from 'react';
import style from './ContentRate.module.css';

import Button from '@components/Button/Button';
import StarSection from '@components/StarSection/StarSection';
import FormQuestion from '@components/FormQuestion/FormQuestion';
import { useNavigate } from 'react-router-dom';
const fetchUrl = `${import.meta.env.VITE_APP_BACKEND_URL}/ratings`;
interface ContentRateProps {
  id?: string;
  className?: string;
  toiletId?: number | string;
  children?: HTMLAttributes<HTMLDivElement>['children'];
}

const ContentRate: React.FC<ContentRateProps> = ({ id, className, toiletId, children }) => {
  const [rating, setRating] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState({
    wasYourVisitFree: false,
    wasItClean: false,
    wasThePaperWhite: false,
    wasThereSoap: false,
    isThereAShower: false,
    wasThereANiceSmell: false,
  });

  const navigate = useNavigate();

  const navigator = () => {
    location.reload();
  };

  const handleQuestionClick = (questionId: keyof typeof questionsAnswered) => {
    setQuestionsAnswered({ ...questionsAnswered, [questionId]: true });
  };

  const handleStarClick = (star: number) => {
    setRating(star);
  };

  const allQuestionsAnswered = Object.values(questionsAnswered).every(Boolean);
  const isButtonBoxClickable = allQuestionsAnswered && rating > 0;

  const handleSubmit = async () => {
    if (!isButtonBoxClickable) {
      return;
    }

    const details = Object.keys(questionsAnswered).reduce((acc, key) => {
      return { ...acc, [key]: questionsAnswered[key as keyof typeof questionsAnswered] ? 'yes' : 'no' };
    }, {});

    try {
      const response = await fetch(`${fetchUrl}/${toiletId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          toiletId,
          rate: rating,
          details,
        }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };


  return (
    <section id={id} className={[style.contentRateSection, className].join(' ')}>
      <div className={style.rateStar}>
        <span>Rate your visit</span>
        <StarSection onStarClick={handleStarClick}/>
      </div>
      <div className={style.formSection}>
        <FormQuestion text={'Was your visit free?'} onClick={() => handleQuestionClick('wasYourVisitFree')}/>
        <FormQuestion text={'Was it clean?'} onClick={() => handleQuestionClick('wasItClean')}/>
        <FormQuestion text={'Was the paper white?'} onClick={() => handleQuestionClick('wasThePaperWhite')}/>
        <FormQuestion text={'Was there soap?'} onClick={() => handleQuestionClick('wasThereSoap')}/>
        <FormQuestion text={'Is there a shower?'} onClick={() => handleQuestionClick('isThereAShower')}/>
        <FormQuestion text={'Was there a nice smell?'} onClick={() => handleQuestionClick('wasThereANiceSmell')}/>
      </div>
      <Button className={style.buttonBox} text={'submit'} disabled={!isButtonBoxClickable} onClick={navigator} />
      {children}
    </section>
  );
};

export default ContentRate;
