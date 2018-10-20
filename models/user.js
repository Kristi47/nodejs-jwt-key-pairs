const {mongoose} = require('./../db/connection.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
let fs = require('fs');
let Schema = mongoose.Schema;

let UserSchema =  new Schema({
    username:{
        required:true,
        unique:true,
        type:String,
    },
    password:{
        required:true,
        type:String,
    },
    token:{
        type:String,
        required:true
    }
});


UserSchema.statics.findByToken = function(token){
    let User = this;
    let publicKEY = fs.readFileSync('secret/public.key', 'utf8');
    let decoded;
    try{
        decoded = jwt.verify(token,publicKEY);
    }
    catch(err){
        return new Promise((resolve,reject) =>{
            reject(err);
        });
    }
    return User.findOne({
        "username": decoded.username,
        "token":token
    });
}



UserSchema.pre('save',function(next){
    let user = this;
    if(user.isModified('password')){
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(user.password, salt,(err, hash) => {
                user.password = hash;
                next();
            });
        });
    }
    else{
        next();
    }

});

let User = mongoose.model("User",UserSchema);

module.exports = {User};