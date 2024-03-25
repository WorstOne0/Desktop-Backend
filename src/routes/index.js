// NPM Packages
import express from "express";
const router = express.Router();

// Routes
import version from "./version.js";
import authRoute from "@src/modules/auth/routes/index.js";
import userRoute from "@src/modules/user/routes/index.js";
import steamRoute from "@src/modules/steam/routes/index.js";

// Routes
router.use(version);
router.use(authRoute);
router.use(userRoute);
router.use(steamRoute);

export default router;
