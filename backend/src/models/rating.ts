import mongoose from "mongoose";

export interface RatingInterface extends mongoose.Document {
  rateId: string;
  toiletId: mongoose.Schema.Types.ObjectId;
  amountRates: number;
  rate: number;
  money: string;
  clean: string;
  paper: string;
  soap: string;
  shower: string;
  smell: string;
}

const ratingSchema = new mongoose.Schema({
  rateId: { type: String, required: true, unique: true },
  toiletId: { type: mongoose.Schema.Types.ObjectId, ref: "Toilet", required: true },
  amountRates: { type: Number, required: true },
  rate: { type: Number, required: true },
  money: { type: String, required: true },
  clean: { type: String, required: true },
  paper: { type: String, required: true },
  soap: { type: String, required: true },
  shower: { type: String, required: true },
  smell: { type: String, required: true },
});

export const Rating = mongoose.model<RatingInterface>("Rating", ratingSchema);
