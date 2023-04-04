import express from "express";
import * as toiletController from "../controllers/toiletController";

const router = express.Router();

router.get("/", toiletController.getAllToilets);
router.get("/:id", toiletController.getToiletById);

export default router;
