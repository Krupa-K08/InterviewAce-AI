const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

// CHANGED: Using the active stable release to avoid the 404 error
const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash", 
});

const generateResponse = async (prompt) => {
  console.log("Gemini called");

  const result = await model.generateContent(prompt);

  console.log("Gemini success");

  return result.response.text();
};

module.exports = {
  generateResponse,
};