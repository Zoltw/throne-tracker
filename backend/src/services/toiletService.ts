import { Toilet, ToiletInterface } from "../models/toilet";

export const getAllToilets = async (): Promise<ToiletInterface[]> => {
  return await Toilet.find();
};

export const getToiletById = async (id: string): Promise<ToiletInterface | null> => {
  return await Toilet.findById(id);
};
