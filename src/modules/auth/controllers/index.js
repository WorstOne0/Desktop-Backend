// JWT
import { createToken } from "@src/middlewares/jwt.js";
// Models
import User from "@src/modules/user/models/index.js";
// Utils
import { decryptPassword } from "@src/utils/encrypt_password.js";

export default {
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email }, { senha: 0 });

      if (!user) return res.status(404).json({ error: "User not Found" });

      if (!(await decryptPassword(password, user.password))) {
        return res.status(401).json({ error: "Incorrect email or password" });
      }

      const accessToken = createToken(user);

      return res.json({
        status: 200,
        payload: {
          accessToken,
          user,
        },
      });
    } catch (error) {
      res.status(401).json({
        error,
      });
    }
  },
  resetPassword: (req, res, next) => {
    res.status(200).send(`Resetar Password`);
  },
};
