const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}))// must be done everytime we use bodyParser


app.get('/',function(req,res){
    res.sendFile(__dirname + "/index.html")
});

app.post('/',function(req,res){

    var n1= Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var sum= n1+n2;
    res.send("The sum of "+n1+"+"+n2+"="+sum);
});

app.listen(3000,function(){
    console.log("server oppned at port 3000")
});