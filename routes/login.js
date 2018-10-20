const express = require("express");
const verifyToken = require("./../helpers/verifyToken");
let router = express.Router();

router.post('/', verifyToken ,(req,res) => {
    
    res.json({
        data:req._id
    });
});


module.exports = router;