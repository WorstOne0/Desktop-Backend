// .env config
import dotenv from "dotenv";
// NPM Packages
import SteamAPI from "steamapi";
import SteamAuth from "node-steam-openid";
import open from "open";

dotenv.config();

const steamAuth = new SteamAuth({
  realm: "http://localhost:4000",
  returnUrl: "http://localhost:4000/steam/connnectSteamAccountReciever",
  apiKey: process.env.STEAM_API_KEY,
});

const steamApi = new SteamAPI(process.env.STEAM_API_KEY);

// Steam Controller
export default {
  //
  connnectSteamAccount: async (req, res, next) => {
    // Logged
    if (!req.userEmail) {
      return res.status(401).send("Unauthorized");
    }

    const redirectUrl = await steamAuth.getRedirectUrl();
    console.log(redirectUrl);

    // Opens the URL in the default browser.
    await open(`${redirectUrl}&userEmail=${req.userEmail}`);
    //
    res.status(200).json();
  },
  connnectSteamAccountReciever: async (req, res, next) => {
    try {
      console.log(req.headers);

      const steamUser = await steamAuth.authenticate(req);

      console.log(steamUser.steamid);

      res.status(200).json();
    } catch (error) {
      console.error(error);
    }
  },
  //
  getUser: (req, res, next) => {
    // Logged
    if (!req.userEmail) {
      return res.status(401).send("Unauthorized");
    }

    steamApi.resolve("https://steamcommunity.com/id/worstone0/").then((id) => {
      console.log(id);
    });
  },
};
