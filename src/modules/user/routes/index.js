// NPM Packages
import express from "express";
// Controller
import userController from "../controllers/index.js";
// JWT
import { verifyToken } from "@src/middlewares/jwt.js";

const router = express.Router();

const path = "/user";

router.get(`${path}`, verifyToken, userController.getAll);
router.get(`${path}/:_id`, verifyToken, userController.getById);
router.post(`${path}`, verifyToken, userController.create);
router.put(`${path}`, verifyToken, userController.update);
router.delete(`${path}`, verifyToken, userController.delete);

export default router;
