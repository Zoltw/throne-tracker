import mongoose from "mongoose";
import { RatingInterface } from "./rating";

export interface ToiletInterface extends mongoose.Document {
  toiletId: string;
  name: string;
  hours: string;
  location: {
    address: {
      country: string;
      city: string;
      zip: string;
      addressLine1: string;
    };
    latitude: number;
    longitude: number;
  };
  rates: RatingInterface[];
}

const toiletSchema = new mongoose.Schema({
  toiletId: { type: String, required: true },
  name: { type: String, required: true },
  hours: { type: String, required: true},
  location: {
    address: {
      country: { type: String, required: true },
      city: { type: String, required: true },
      zip: { type: String, required: true },
      addressLine1: { type: String, required: true },
    },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  rates: [{ type: mongoose.Schema.Types.ObjectId, ref: "Rating" }],
});

export const Toilet = mongoose.model<ToiletInterface>("Toilet", toiletSchema);
