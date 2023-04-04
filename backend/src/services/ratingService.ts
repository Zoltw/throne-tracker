import { Rating } from "../models/rating";

export const addRating = async (ratingData: typeof Rating): Promise<typeof Rating> => {
  const rating = new Rating(ratingData);
  return {} as typeof Rating;
};

export const getRatingsByToiletId = async (toiletId: string): Promise<typeof Rating[]> => {
  return await Rating.find({ toiletId });
};
