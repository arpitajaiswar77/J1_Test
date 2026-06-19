const mongoose = require('mongoose');

//schema
const StuSchema = mongoose.Schema(
    {
        rollno:{
            type:Number,
            required:true,

        },
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        course:{
            type:String,
            required:true,
           
        }
    },
    {timestamps:true}
);

//model

const StuModel = mongoose.model("Stu",StuSchema);
module.exports = StuModel;