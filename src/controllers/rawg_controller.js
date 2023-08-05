// NPM Packages

// RAWG Controller
export default {
  //
  getAll: (req, res, next) => {
    // Logged
    if (!req.userEmail) {
      return res.status(401).send("Unauthorized");
    }

    //
    res.status(401).json({ error: "Incorrect email or password" });
  },
};
