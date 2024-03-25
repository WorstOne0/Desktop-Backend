// .env config
import dotenv from "dotenv";
dotenv.config();

// NPM Packages
import express from "express";
import router from "./routes/index.js";
import { socketServer } from "./socket/index.js";
// Database
import { mongoDBConnect } from "./database/mongo.js";

// Create Server
const app = express();

// Serve Config
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoDBConnect();

// Routes
app.use(router);

// Start HTTP Server
const httpServer = app.listen(process.env.PORT, () => {
  console.log(`Server Started on port ${process.env.PORT}`);
});

// Start Socket Server
socketServer(httpServer);
