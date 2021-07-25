import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, index: true },
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
const userSchema = mongoose.model('users', schema);
userSchema.createIndexes();
export default userSchema;
