import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

// Maybe change lates into saparated schemas
const UserSchema = new Schema({
  // User
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["Super Admin", "Admin", "Moderator", "User", "Guest"],
    default: "Guest",
  },

  // Profile
  screenName: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
  },
  thumbnail: {
    type: String,
  },

  // Steam Profile
  steamId: {
    type: String,
  },

  // Dates
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

UserSchema.plugin(mongoosePaginate);
export default model("User", UserSchema);
