const express = require("express");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes")
const interviewRoutes = require("./routes/interviewRoutes");
const geminiRoutes = require("./routes/geminiRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");

const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(
    cors({
        origin: "http://localhost:5173",
    })
);
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/interviews", interviewRoutes);
app.use("/api/gemini", geminiRoutes);
app.use("/api/feedback",feedbackRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("InterviewAce AI Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});