require('./../config/config.js');
const jwt = require('jsonwebtoken');
let fs = require('fs');

let generateToken = function(user){

    return new Promise((resolve,reject) => {

        let privateKEY = fs.readFileSync('secret/private.key', 'utf8');
        let isuser = 'Kristi';
        let subject = 'kristi@user.com';
        let audience = 'http://localhost.com'; 
        // SIGNING OPTIONS
        let signOptions = {
            issuer: isuser,
            subject: subject,
            audience: audience,
            expiresIn: "12h",
            algorithm: "RS256"
        };
        jwt.sign({username:user.username}, privateKEY, signOptions, (err,token) => {
            if(err){
                reject(err);
            }
            else{
                resolve(token);
            }
        });
    });
}

module.exports = {generateToken}