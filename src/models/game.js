import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const GameSchema = new Schema({
  name: {
    type: String,
  },
  background_image: {
    type: String,
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

GameSchema.plugin(mongoosePaginate);
export default model("Game", GameSchema);
