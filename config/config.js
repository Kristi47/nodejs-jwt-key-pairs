let env = process.env.NODE_ENV || 'development';//this is not set local,is set in Heroku
console.log(`Environment is ${env}`);


if(env === 'development' || env === 'test'){
    let config = require('./config.json');
    let envConfig = config[env]

    Object.keys(envConfig).forEach((key) =>{
        process.env[key] = envConfig[key];//foreach has key => value pairs
    });
    
}