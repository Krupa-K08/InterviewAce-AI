const express = require("express");

const router = express.Router();

const {
  generateResponse,
} = require("../services/geminiService");

const Feedback =
require("../models/Feedback");

router.post(

"/generate-feedback",

async(req,res)=>{

try{

const{

company,

transcript

}=req.body;

const prompt = `

You are a senior software interviewer at ${company}.

Analyze the interview transcript.

Evaluate:

Communication

Technical Knowledge

Confidence

Problem Solving

Give response ONLY as valid JSON.

Do NOT write explanations.

Do NOT write markdown.

Do NOT wrap inside \`\`\`json

Format:

{

"overallScore":85,

"communication":80,

"technicalKnowledge":90,

"confidence":78,

"problemSolving":88,

"strengths":[
"",
"",
""
],

"weaknesses":[
"",
"",
""
],

"recommendation":""

}

Transcript:

${JSON.stringify(transcript)}

`;

let feedback =

await generateResponse(prompt);

feedback = feedback

.replace(/```json/g,"")

.replace(/```/g,"")

.trim();

feedback =

JSON.parse(feedback);

const savedFeedback =

await Feedback.create({

company,

overallScore:
feedback.overallScore,

communication:
feedback.communication,

technicalKnowledge:
feedback.technicalKnowledge,

confidence:
feedback.confidence,

problemSolving:
feedback.problemSolving,

strengths:
feedback.strengths,

weaknesses:
feedback.weaknesses,

recommendation:
feedback.recommendation,

transcript

});

res.json({

success:true,

feedback:savedFeedback

});

}

catch(error){

console.log(error);

res.status(500).json({

success:false,

message:
"Failed to generate feedback",

error:error.message

});

}

}

);

module.exports = router;