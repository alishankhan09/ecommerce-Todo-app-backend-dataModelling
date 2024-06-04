import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    contents: {
      type: String,
      required: true,
    },

    complete: {
      type: Boolean,
      required: true,
      default: false,
    },

    createdBY: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },

    subTodo: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTodo',
      },
    ],
  },
  { timestamps: true }
);

export const Todo = mongoose.model('Todo', todoSchema);
