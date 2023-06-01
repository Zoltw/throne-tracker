import { AverageRatingResult, Rating, RatingDetailFields, RatingInterface } from "../models/rating";

type RatingDetailFieldKey = keyof RatingDetailFields;

export const addRating = async (ratingData: RatingInterface): Promise<RatingInterface> => {
  const rating = new Rating(ratingData);
  return await rating.save();
};

export const getRatingsByToiletId = async (toiletId: string): Promise<RatingInterface[]> => {
  return await Rating.find({ toiletId: toiletId });
};

export const getAverageRating = async (toiletId: number): Promise<AverageRatingResult> => {
  const ratings = await Rating.find({ toiletId: toiletId });

  let rateSum = 0;
  const detailFields: RatingDetailFieldKey[] = ['money', 'clean', 'paper', 'soap', 'shower', 'smell'];
  const detailVotes: Record<RatingDetailFieldKey, { yes: number, no: number }> = {
    money: { yes: 0, no: 0 },
    clean: { yes: 0, no: 0 },
    paper: { yes: 0, no: 0 },
    soap: { yes: 0, no: 0 },
    shower: { yes: 0, no: 0 },
    smell: { yes: 0, no: 0 },
  };

  for (const rating of ratings) {
    rateSum += rating.rate;
    detailFields.forEach(field => {
      if (rating.details[field] === 'yes') {
        detailVotes[field].yes += 1;
      } else if (rating.details[field] === 'no') {
        detailVotes[field].no += 1;
      }
    });
  }

  const averageRate = rateSum / ratings.length;
  const ratingsAmount = ratings.length;

  
  const averageDetails = detailFields.reduce((result, field) => {
    result[field] = detailVotes[field].yes > detailVotes[field].no ? 'yes' : 'no';
    return result;
  }, {} as RatingDetailFields);

  return {
    toiletId: toiletId,
    rate: averageRate,
    count: ratingsAmount,
    details: averageDetails,
  }
};



