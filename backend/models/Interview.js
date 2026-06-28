const mongoose = require("mongoose");

const interviewSchema = new mongoose.Schema(
{
userId:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},

company:{
type:String,
required:true
},

duration:{
type:String,
required:true
},

transcript:[
{
sender:String,
text:String
}
],

feedback:{

overallScore:{
type:Number,
default:0
},

communication:{
type:Number,
default:0
},

technicalKnowledge:{
type:Number,
default:0
},

confidence:{
type:Number,
default:0
},

problemSolving:{
type:Number,
default:0
},

strengths:{
type:[String],
default:[]
},

weaknesses:{
type:[String],
default:[]
},

recommendation:{
type:String,
default:""
}

},

completed:{
type:Boolean,
default:true
}

},
{
timestamps:true
}
);

module.exports =
mongoose.model(
"Interview",
interviewSchema
);