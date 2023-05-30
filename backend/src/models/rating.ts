import mongoose from "mongoose";

export interface RatingDetailFields {
  money: string;
  clean: string;
  paper: string;
  soap: string;
  shower: string;
  smell: string;
}

export interface RatingInterface extends mongoose.Document {
  toiletId: number;
  details: RatingDetailFields,
  rate: number;
}

const ratingSchema = new mongoose.Schema({
  toiletId: { type: Number, required: true },
  rate: { type: Number, required: true },
  details: {
    money: { type: String, required: true },
    clean: { type: String, required: true },
    paper: { type: String, required: true },
    soap: { type: String, required: true },
    shower: { type: String, required: true },
    smell: { type: String, required: true },
  },
});

export interface AverageRatingResult {
  toiletId: number;
  rate: number;
  count: number;
  details: {
    money: string;
    clean: string;
    paper: string;
    soap: string;
    shower: string;
    smell: string;
  }
}

export interface RateDetails {
  money: string;
  clean: string;
  paper: string;
  soap: string;
  shower: string;
  smell: string;
  [key: string]: string;
}



export const Rating = mongoose.model<RatingInterface>("Rating", ratingSchema);
