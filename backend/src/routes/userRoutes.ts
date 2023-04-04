import express from "express";
import * as userController from "../controllers/userController";

const router = express.Router();

router.post("/register", userController.createUser);
router.post("/login", userController.loginUser);
router.get("/:userId", userController.getUser);
router.put("/:userId", userController.updateUser);
router.delete("/:userId", userController.deleteUser);

export default router;
