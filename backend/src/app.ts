import express from "express";
import toiletRoutes from "./routes/toiletRoutes";
import ratingRoutes from "./routes/ratingRoutes";
import userRoutes from "./routes/userRoutes";
import { accessControl } from "./utils/middlewares";
import session from 'express-session';
import MongoStore from 'connect-mongo';

const app = express();

app.use(
  session({
    secret: '647570616A616E61',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: "mongodb://db:27017/throne-tracker",
      collectionName: 'sessions',
      ttl: 3600,
    }),
  })
);

app.use(express.json());
app.use(accessControl);
app.use("/toilets", toiletRoutes);
app.use("/ratings", ratingRoutes);
app.use("/users", userRoutes);

export default app;
