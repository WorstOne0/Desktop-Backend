import jwt from "jsonwebtoken";

const createToken = (user) => {
  return jwt.sign({ user }, process.env.ACCESS_TOKEN_JWT, {
    expiresIn: "5h",
  });
};

const verifyToken = async (req, res, next) => {
  const accessToken = req.headers.authorization;

  if (!accessToken) {
    return res.status(401).json({
      status: 401,
      error: "Token não encontrado",
      msg: "Não autorizado",
    });
  }

  try {
    const jwtData = jwt.verify(accessToken.split(" ")[1], process.env.ACCESS_TOKEN_JWT);

    req.authUser = jwtData.user;
    next();
  } catch {
    res.status(401).json({
      status: 401,
      msg: "Não autorizado",
    });
  }
};

export { verifyToken, createToken };
