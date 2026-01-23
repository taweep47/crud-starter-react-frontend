import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Company is required"],
      trim: true,
    },
    position: {
      type: String,
      required: [true, "Position is required"],
      trim: true,
    },
    status: {
      type: String,
      enum: {
        values: ["Applied", "Interview", "Offer", "Rejected"],
        message: "{VALUE} is not a valid status",
      },
      default: "Applied",
    },
    appliedDate: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", jobSchema);
