import mongoose from "mongoose";

const toiletSchema = new mongoose.Schema({
  toiletId: { type: String, required: true },
  name: { type: String, required: true },
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
    rates: {
        id: { type: String, required: true },
    }
});

export const Toilet = mongoose.model("Toilet", toiletSchema);
