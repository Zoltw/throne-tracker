import express from "express";
import toiletRoutes from "./routes/toiletRoutes";
import ratingRoutes from "./routes/ratingRoutes";
import userRoutes from "./routes/userRoutes";

const app = express();

app.use(express.json());
app.use("/toilet", toiletRoutes);
app.use("/rating", ratingRoutes);
app.use("/users", userRoutes);

export default app;
