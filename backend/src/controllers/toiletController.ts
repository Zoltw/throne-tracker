import { Request, Response } from "express";
import * as toiletService from "../services/toiletService";
import { ToiletInterface } from "../models/toilet";

export const getAllToilets = async (req: Request, res: Response) => {
  try {
    const toilets = await toiletService.getAllToilets();
    res.json(toilets);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getToiletById = async (req: Request, res: Response) => {
  const toiletId = req.params.toiletId;
  try {
    const toilet = await toiletService.getToiletById(toiletId);
    res.json(toilet);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
