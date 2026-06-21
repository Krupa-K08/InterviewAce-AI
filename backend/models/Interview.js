const mongoose = require("mongoose");

const interviewSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    company: {
      type: String,
      required: true,
    },

    duration: {
      type: String,
      required: true,
    },

    transcript: [
      {
        sender: String,
        text: String,
      },
    ],

    completed: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Interview", interviewSchema);