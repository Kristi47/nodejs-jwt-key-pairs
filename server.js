require('./config/config.js');
const express = require("express");
let bodyParser = require('body-parser');
let loginRoute = require('./routes/login.js');
let registerRoute = require('./routes/register.js');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/login',loginRoute);
app.use('/api/register',registerRoute);



app.listen(process.env.PORT,()=>{
    console.log(`Server is up at port ${process.env.PORT}`);
}); 