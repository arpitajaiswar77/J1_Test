const mongoose = require('mongoose');

//schema
const empSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,

        },
        salary:{
            type:Number,
            min:12900,
            max:23900,
            required:true,
        },
        dept:{
            type:String,
            enum:["IT","HR","SALES","DEV"],
            required:true,
        },
        address:{
            type:String,
           
        }
    },
    {timestamps:true}
);

//model

const empModel = mongoose.model("emp",empSchema);
module.exports = empModel;