import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
    },

    customerType: {
      type: String,
      required: true,
    },

    interestType: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: [
        "New",
        "Reviewed",
        "Responded",
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
  "Enquiry",
  enquirySchema
);