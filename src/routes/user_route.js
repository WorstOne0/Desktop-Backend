// NPM Packages
import express from "express";
// Controller
import userController from "../controllers/user_controller.js";

const router = express.Router();

router.get("/", userController.getAll);
router.get("/:id/", userController.getUser);
router.post("/", userController.addUser);
router.put("/:id/", userController.updateUser);
router.delete("/:id/", userController.deleteUser);

export default router;
