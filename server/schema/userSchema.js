import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  info: { type: String },
});

export default mongoose.model("User", userSchema);