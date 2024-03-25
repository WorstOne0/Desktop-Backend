// NPM Packages
import { model } from "mongoose";
import bcrypt from "bcrypt";

// User Model
const User = model("User");

export default async function () {
  const duplicate = await User.findOne({ email: process.env.ADMIN_ACCOUNT });
  if (!duplicate) {
    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

    await User.create({
      email: process.env.ADMIN_ACCOUNT,
      password: hashedPassword,
      userName: process.env.ADMIN_USERNAME,
      role: "super_admin",
      screenName: process.env.ADMIN_SCREENNAME,
      profilePicture: process.env.ADMIN_PICTURE,
    });
  }
}
