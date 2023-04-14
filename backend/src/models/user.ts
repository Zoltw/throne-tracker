import mongoose from "mongoose";

export interface UserInterface extends mongoose.Document {
  userId: string;
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  userId: { type: String, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const User = mongoose.model<UserInterface>("User", userSchema);
