import { Request, Response } from "express";
import * as userService from "../services/userService";
import { UserInterface } from "../models/user";

export const createUser = async (req: Request, res: Response) => {
    console.log(req.body);
    const userData: UserInterface & { passwordConfirmation: string } = req.body;
    if (userData.password !== userData.passwordConfirmation) {
      return res.status(400).json({ message: "Passwords do not match" });
    }
    console.log("dupa");
    try {
      const newUser = await userService.createUser(userData);
      console.log("dupa2");
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  };
  

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await userService.loginUser(email, password);
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getUser = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  try {
    const user = await userService.getUser(userId);
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
