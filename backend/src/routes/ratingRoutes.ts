import express from "express";
import * as ratingController from "../controllers/ratingController";

const router = express.Router();

router.post("/", ratingController.addRating);
router.get("/toilet/:toiletId", ratingController.getRatingsByToiletId);

export default router;