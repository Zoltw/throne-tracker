import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema({
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

export const Rating = mongoose.model("Rating", ratingSchema);
