import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    avatar: { type: String },
    info: { type: String },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
