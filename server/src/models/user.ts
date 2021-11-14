import * as mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, "Please add user Id"],
  },
  profilePic: {
    type: String,
    required: [true, "Please upload a profile picture"],
  },
  reviewed: {
    type: Boolean,
    default: false,
  },
  goodImage: {
    type: Boolean,
    default: null,
  },
});

export default mongoose.model("User", UserSchema);
