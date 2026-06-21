const express = require("express");
const Interview = require("../models/Interview");

const router = express.Router();

/*
POST
Save completed interview
*/
router.post("/", async (req, res) => {
  try {
    const {
      userId,
      company,
      duration,
      transcript,
    } = req.body;

    const interview = await Interview.create({
      userId,
      company,
      duration,
      transcript,
    });

    res.status(201).json(interview);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to save interview",
    });
  }
});

/*
GET
Fetch all interviews
*/
router.get("/", async (req, res) => {
  try {
    const interviews = await Interview.find()
      .sort({ createdAt: -1 });

    res.json(interviews);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch interviews",
    });
  }
});

/*
GET
Fetch interview by ID
*/
router.get("/:id", async (req, res) => {
  try {
    const interview = await Interview.findById(
      req.params.id
    );

    if (!interview) {
      return res.status(404).json({
        message: "Interview not found",
      });
    }

    res.json(interview);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch interview",
    });
  }
});

module.exports = router;