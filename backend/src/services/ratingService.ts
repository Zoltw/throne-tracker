import { Rating, RatingInterface } from "../models/rating";

export const addRating = async (ratingData: RatingInterface): Promise<RatingInterface> => {
  const rating = new Rating(ratingData);
  await rating.save();
  return rating;
};

export const getRatingsByToiletId = async (toiletId: string): Promise<RatingInterface[]> => {
  return await Rating.find({ toiletId });
};
