// NPM Packages
import express from "express";
// Controller
import userController from "../controllers/user_controller.js";

const router = express.Router();

router.get("/user", userController.getAll);
router.get("/user/:id", userController.getUser);
router.post("/user", userController.addUser);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);

export default router;
