var express = require('express');
var app = express();
var jwt=require('jsonwebtoken');
// var decoded=require('jwt-decode');

const cors = require("cors");

app.use(express.json());
app.use(cors());


var server = app.listen(8000, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
})
const userid=[{user:'sujith',password:'abc'},{user:'ajay',password:'abc'}]
app.post('/getData',(req, res)=> {
 userid.push({user:req.body.username,password:req.body.password})
// const inter={user:req.body.newuser,password:req.body.newpassword}
// res.send(userid)

//  userid.push(inter)
//  res.send(userid)
})
app.post('/verify',(req,res)=>{
    // let newuser=userid.filter((newuser)=>{
        // return newuser.user==req.body.newuser && newuser.password==req.body.newpassword

    // });
    // res.send(newuser)
    // if(newuser.length)
    // {
        let newuser={"user":req.body.username,"password":req.body.password}
        let token=jwt.sign(newuser,"secret",{expiresIn:'2h'});
        res.send(token);
        
        // res.send(decoded(token));

    }
    // else{
    //  res.send("Invalid login")
    // }
    
);
