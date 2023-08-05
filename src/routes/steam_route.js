// NPM Packages
import express from "express";
// Controller
import steamController from "../controllers/steam_controller.js";

const router = express.Router();

router.get("/connnectSteamAccount", steamController.connnectSteamAccount);
router.get(
  "/connnectSteamAccountReciever",
  steamController.connnectSteamAccountReciever
);

export default router;
