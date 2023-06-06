import mongoose from "mongoose";

export interface UserInterface extends mongoose.Document {
  _id: string;
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const User = mongoose.model<UserInterface>("User", userSchema);
