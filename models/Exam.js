const mongoose = require("mongoose");

const ExamSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  duration: { type: Number, required: true },
  shifts: { type: Number, required: true },
  pcAllotted: { type: Number, required: true },
  pcCost: { type: Number, required: true },
  totalCost: { type: Number, required: true },
  receivedCost: { type: Number, required: true },
  pendingCost: { type: Number, required: true },
  status: {
    type: String,
    enum: ["Completed", "Postponed", "Pending"],
    default: "Pending",
  },
});

module.exports = mongoose.model("Exam", ExamSchema)