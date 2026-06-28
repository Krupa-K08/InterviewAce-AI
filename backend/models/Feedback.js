const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({

    company:String,

    overallScore:Number,

    communication:Number,

    technicalKnowledge:Number,

    confidence:Number,

    problemSolving:Number,

    strengths:[String],

    weaknesses:[String],

    recommendation:String,

    createdAt:{

        type:Date,

        default:Date.now

    }

});

module.exports = mongoose.model(
    "Feedback",
    feedbackSchema
);