// .env config
import dotenv from "dotenv";
dotenv.config();

// NPM Packages
import express from "express";
import mongoose from "mongoose";
// JWT
import { verifyToken } from "./jwt.js";
// Models
import "./models/user.js";
// Routes
import version from "./routes/version.js";
import authRoute from "./routes/auth_route.js";
import userRoute from "./routes/user_route.js";
// Database SUPER ADMIN
import initSuperAdmin from "./init.js";

// Create Server
const app = express();

// Serve Config
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Database Connect
mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
});

// JWT Middleware
app.use((req, res, next) => verifyToken(req, res, next));

// Routes
app.use("/", version);
app.use("/", authRoute);
app.use("/", userRoute);

// Add the super admin to the database
initSuperAdmin();

// Start Server
app.listen(process.env.PORT, () => {
  console.log(`Server Started on port ${process.env.PORT}`);
});
