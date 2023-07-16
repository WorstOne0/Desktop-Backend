import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const UserSchema = new Schema({
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
  screenName: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    required: false,
  },
  thumbnail: {
    type: String,
    required: false,
  },
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
