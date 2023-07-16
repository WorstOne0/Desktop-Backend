// NPM Packages
import express from "express";
// Controller
import authController from "../controllers/auth_controller.js";

const router = express.Router();

router.post("/login", authController.login);
router.post("/logout", authController.logout);
router.post("/resetPassword", authController.resetPassword);

export default router;
