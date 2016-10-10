var express=require("express");

console.log("hello server");

var router=express.Router();
var app = express();
var port= 8000;

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


app.use(express.static('public/lib'));
app.use(express.static('src/client'));

app.listen(port , function(err){
    console.log("****************************************");
    console.log("running server on port number : "+port);
});