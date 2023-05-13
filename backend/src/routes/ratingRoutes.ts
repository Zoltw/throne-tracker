import express from "express";
import * as ratingController from "../controllers/ratingController";

const router = express.Router();

router.post("/toilets/:toiledId", ratingController.addRating);
router.get("/toilets/:toiletId", ratingController.getRatingsByToiletId);

export default router;