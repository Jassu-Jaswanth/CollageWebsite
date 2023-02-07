var express = require('express')
var path = require('path');
var cors = require('cors');
var app = express();

var auth = require('./Controllers/login_cont');
var sprofile = require('./Controllers/stud_cont');
const { application } = require('express');



// app.use(express.bodyParser())
// app.use(express.cookieParser())
// app.use(express.methodOverride())
// app.use(app.router)
// app.use(allowCrossDomain)


app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());       
app.use(express.urlencoded({extended: true})); 
// app.use(body_parser.json());
// app.use(body_parser.urlencoded({extended: true}))
app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    "credentials": true,
    "Access-Control-Allow-Origin": "*"
}));

// Handle post requests here
app.post('/login',auth.valuser);


// Handle get requests here
app.get('/home',sprofile.stud_profile);

var server = app.listen(8888,() => {
    var host = server.address().address;
    var port = server.address().port;
    console.log("example app listening at http://%s:%s",host,port);
})


































// lets hash and encrpt the passwords
// var ex_password = "jaswanth@2002";
// async function hashit(pswd,sr){
//     var inhash;
//     await bcrypt.genSalt(sr).then(salt => {
//         // console.log('Salt: ', salt);
//         return bcrypt.hash(pswd, salt);
//     })
//     .then(hash => {
//         // console.log('Hash: ', hash);
//         inhash = hash;
//     })
//     .catch(err => console.error(err.message));
//     return inhash;
// }
// console.log(hashit(ex_password,saltrounds));