import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    question: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: [
        "New",
        "Answered",
        "Archived",
      ],
      default: "New",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Question",
  questionSchema
);