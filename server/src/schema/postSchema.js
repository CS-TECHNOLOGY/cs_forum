import mongoose from 'mongoose';
const postSchema = new mongoose.Schema(
  {
    arthurId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    name_arthur: {
      type: String,
    },
    avatar_arthur: {
      type: String,
    },
    likes: [
      {
        user_id: {
          type: mongoose.Schema.Types.ObjectId,
        },
      },
    ],
    shares: [
      {
        user_id: {
          type: mongoose.Schema.Types.ObjectId,
        },
      },
    ],
    comments: [
      {
        user_id: {
          type: mongoose.Schema.Types.ObjectId,
        },
        text: {
          type: String,
          required: true,
        },
        name: {
          type: String,
        },
        avatar: {
          type: String,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model('posts', postSchema);
