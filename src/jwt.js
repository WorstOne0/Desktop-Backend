import jwt from "jsonwebtoken";

const createToken = (user) => {
  const accessToken = jwt.sign(
    { userEmail: user.email },
    process.env.ACCESS_TOKEN_JWT,
    {
      expiresIn: "5h",
    }
  );

  return accessToken;
};

const verifyToken = async (req, res, next) => {
  const accessToken = req.headers.authorization;

  if (!accessToken) return next();

  try {
    const jwtData = jwt.verify(
      accessToken.split(" ")[1],
      process.env.ACCESS_TOKEN_JWT
    );

    req.userEmail = jwtData.userEmail;
  } catch {}

  return next();
};

export { verifyToken, createToken };
