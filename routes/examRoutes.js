const express = require("express");
const Exam = require("../models/Exam");
const router = express.Router();

// Get all exams
router.get("/", async (req, res) => {
    const exams = await Exam.find();
    res.json(exams);
});

// Add new exam
router.post("/", async (req, res) => {
    const exam = new Exam(req.body);
    await exam.save();
    res.json(exam);
});

// Update exam
router.put("/:id", async (req, res) => {
    const exam = await Exam.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(exam);
});

// Delete exam
router.delete("/:id", async (req, res) => {
    await Exam.findByIdAndDelete(req.params.id);
    res.json({ message: "Exam deleted" });
});

module.exports = router;
