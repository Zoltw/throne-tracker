import { Toilet } from "../models/toilet";

export const getAllToilets = async (): Promise<typeof Toilet[]> => {
    return await Toilet.find();
  };
  
  export const getToiletById = async (id: string): Promise<typeof Toilet | null> => {
    return await Toilet.findById(id);
  };
