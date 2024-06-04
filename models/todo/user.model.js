import mongoose, { mongo } from 'mongoose';

const userScehma = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userScehma);
