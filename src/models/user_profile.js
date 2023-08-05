import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const UserProfileSchema = new Schema({
  socials: {
    type: Array,
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

UserProfileSchema.plugin(mongoosePaginate);
export default model("UserProfile", UserProfileSchema);
