import mongoose from "mongoose";

const MONGODB_URI = "mongodb://db:27017/throne-tracker";

export const connectDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
