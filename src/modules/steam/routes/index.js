// NPM Packages
import express from "express";
// Controller
import steamController from "../controllers/index.js";
// JWT
import { verifyToken } from "@src/middlewares/jwt.js";

const router = express.Router();

const path = "/steam";

router.get(`${path}/connnectSteamAccount`, verifyToken, steamController.connnectSteamAccount);
router.get(`${path}/connnectSteamAccountReciever`, steamController.connnectSteamAccountReciever);

export default router;
