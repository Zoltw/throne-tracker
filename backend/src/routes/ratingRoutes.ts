import express from "express";
import * as ratingController from "../controllers/ratingController";

const router = express.Router();

router.post("/:toiledId", ratingController.addRating);
router.get("/:toiletId", ratingController.getRatingsByToiletId);

export default router;