import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const UserSchema = new Schema(
  {
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
      enum: ["super_admin", "admin", "user", "guest"],
      default: "guest",
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
  },
  { timestamps: true }
);

UserSchema.plugin(mongoosePaginate);
export default model("User", UserSchema);
