const express = require("express");
const router = express.Router();

const {
  generateResponse,
} = require("../services/geminiService");

router.post("/ask", async (req, res) => {
  try {
    const { company, conversation } = req.body;

    const prompt = `
You are a professional interviewer at ${company}.

Your job:
- Conduct a realistic interview.
- Ask one question at a time.
- Ask follow-up questions when needed.
- Keep responses concise.
- Never answer for the candidate.

Conversation:
${conversation}
`;

    const response =
      await generateResponse(prompt);

    res.json({
      reply: response,
    });
  } catch (error) {
  console.error(error);

  res.status(500).json({
    message: "Gemini error",
    error: error.message,
  });
}
});

module.exports = router;