require('./../config/config.js');
let {User} = require('./../models/user.js');
const _ = require('lodash');


let verifyToken = function(req,res,next){
    let token = req.header('x-auth');
    if(_.isEmpty(token)){
        res.sendStatus(403);    
    }

    User.findByToken(token).then((user)=>{
        if(!user){
            Promise.reject();
        }
        req._id = user._id;
        req.username = user.username;
        req.token = user.token;
        next();
    })
    .catch(err => {
        res.sendStatus(403);
    });
}

module.exports = verifyToken;