const express = require('express');
const { displayEmp, addEmp, updateEmp, deleteEmp, searchMap, searchEmp } = require('../controller/empController');


const router = express.Router();
router.get("/",displayEmp);

router.post("/addEmp",addEmp);

router.patch("/updateEmp/:id",updateEmp);

router.delete("/del/:id",deleteEmp);

router.get("/search/:id",searchEmp);

module.exports=router;