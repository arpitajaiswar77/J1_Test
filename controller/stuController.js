const StuModel = require("../model/stuModel")

const displayStu = async(req,resp)=>{
    try {
        const result = await StuModel.find();
        resp.json(result);
    } catch (error) {
        console.log(error);
        
    }
};

const addStu = async (req,resp)=>{
    try {
        const data = new StuModel({
            rollno:req.body.rollno,
            name:req.body.name,
            email:req.body.email,
            course:req.body.course,
        });
        const result = await data.save();
        resp.json(result);
    } catch (error) {
        console.log(error);
        
    }
};

const updatStu = async (req,resp)=>{
    try {
        const result = await StuModel.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
        });
        resp.json(result);
    } catch (error) {
        console.log(error);
        
    }
};

const deleteStu = async(req,resp)=>{
    try {
        const result = await StuModel.findByIdAndDelete(req.params.id);
        resp.json(result);
    } catch (error) {
        console.log(error);
        
    }
};

const searchStu = async(req,resp)=>{
    try {
        const result=await StuModel.findById(req.params.id);
        resp.json(result);
    } catch (error) {
        console.log(error);
        
    }
};

module.exports ={displayStu,addStu,updatStu,deleteStu,searchStu};