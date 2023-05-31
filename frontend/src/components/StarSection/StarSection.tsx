import { useState } from 'react';
import style from './StarSection.module.css';

import stars from '@assets/star.svg';
import starsChecked from '@assets/star-yellow.svg';

interface StarSectionProps {
  id?: string;
  className?: string;
  onStarClick?: (star: number) => void;
}

const StarSection: React.FC<StarSectionProps> = ({ className }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (star: number) => {
    setRating(star);
  };

  return (
    <section className={[style.starsSect, className].join(' ')}>
      {[1, 2, 3, 4, 5].map((star) =>
        <span key={star} onClick={() => handleStarClick(star)}>
          <img
            className={style.star}
            src={rating >= star ? starsChecked : stars}
          />
        </span>,
      )}
    </section>
  );
};

export default StarSection;
