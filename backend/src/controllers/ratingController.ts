import { Request, Response } from "express";
import * as ratingsService from "../services/ratingService";
import { RatingInterface } from "../models/rating";

export const addRating = async (req: Request, res: Response) => {
  const ratingData: RatingInterface = req.body;
  try {
    const newRating = await ratingsService.addRating(ratingData);
    res.status(201).json(newRating);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const getRatingsByToiletId = async (req: Request, res: Response) => {
  const toiletId = req.params.toiletId;
  try {
    const ratings = await ratingsService.getRatingsByToiletId(toiletId);
    res.json(ratings);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
