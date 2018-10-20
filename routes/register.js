const express = require('express');
const _ = require('lodash');
let {User} = require('./../models/user.js');
let {generateToken} = require('./../helpers/generateToken.js');
let router = express.Router();

router.post('/',(req,res) =>{

    let credencials = {
        username:req.body.username,
        password:req.body.password
    }

    if(_.isEmpty(credencials.username) || _.isEmpty(credencials.password)){
        res.json({
            data: "Missing Parameters"
        });
    }

    generateToken(credencials).then((token)=>{
        let newUser = {
            username: credencials.username,
            password: credencials.password,
            token:token
        }
        let user = new User(newUser);
        user.save().then((user) => {
            res.status(200).header('x-auth',user.token).send({
                data:user._id
            });
        })
        .catch((err) => {
            res.sendStatus(400);
        });
    })
    .catch((err) => {
        res.sendStatus(400);
    });

});


module.exports = router;
