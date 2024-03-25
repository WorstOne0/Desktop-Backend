// NPM Packages
import express from "express";
// Controller
import authController from "../controllers/index.js";

const router = express.Router();

router.post("/login", authController.login);
router.post("/resetPassword", authController.resetPassword);

export default router;
