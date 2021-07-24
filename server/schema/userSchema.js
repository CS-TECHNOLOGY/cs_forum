import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  info: { type: String },
  firstname: { type: String },
  lastname: { type: String, required: true },
  avatar: { type: String },
});

export default mongoose.model("User", userSchema);
