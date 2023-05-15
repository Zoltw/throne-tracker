import { Toilet, ToiletInterface } from "../models/toilet";
import { RatingInterface } from "../models/rating";

export const getAllToilets = async (): Promise<ToiletInterface[]> => {
  return await Toilet.find().populate("rates");
};

export const getToiletById = async (id: string): Promise<ToiletInterface | null> => {
  return await Toilet.findById(id).populate("rates");
};
