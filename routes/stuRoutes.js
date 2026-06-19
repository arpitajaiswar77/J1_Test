const express = require('express');
const {displayStu, addStu, updatStu, deleteStu, searchStu } = require('../controller/stuController');


const router = express.Router();
router.get("/",displayStu);

router.post("/add",addStu);

router.patch("/update/:id",updatStu);

router.delete("/delete/:id",deleteStu);

router.get("/search/:id",searchStu);

module.exports=router;