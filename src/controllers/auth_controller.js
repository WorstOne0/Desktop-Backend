// NPM Packages
import bcrypt from "bcrypt";
// JWT
import { createToken } from "../jwt.js";
// Models
import User from "../models/user.js";

// Auth Controller
export default {
  //
  login: async (req, res, next) => {
    const { emailJson, password } = req.body;

    // Try to find e user
    const user = await User.findOne({ emailJson });

    // User dont exist
    if (!user) {
      // Find the right status code
      res.status(404).json({ error: "User not Found" });

      return;
    }

    // Decrypt the Password
    if (!(await bcrypt.compare(password, user.password))) {
      // Wrong password

      // Find the right status code
      res.status(401).json({ error: "Incorrect email or password" });

      return;
    }

    // Create Tokens
    const accessToken = createToken(user);

    const {
      _id,
      email,
      userName,
      screenName,
      profilePicture,
      thumbnail,
      role,
    } = user;

    return res.json({
      id: _id,
      email,
      userName,
      screenName,
      role,
      profilePicture,
      thumbnail,
      accessToken,
    });
  },
  //
  logout: (req, res, next) => {
    let id = req.params.id;

    res.status(200).send(`Buscar o usuario de id ${id}`);
  },
  //
  resetPassword: (req, res, next) => {
    let id = req.params.id;

    res.status(200).send(`Buscar o usuario de id ${id}`);
  },
};
