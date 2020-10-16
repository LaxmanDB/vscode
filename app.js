var express = require("express");
var path = require("path");
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/jmnadas");
var nameSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  DOB: Date,
  mobile: Number,
  email: String,
  PANnumber: String,
  adhar: Number,
  password: String,
});

var User = mongoose.model("user", nameSchema);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
});
app.post('/sign_up', function(req,res){ 
    var firstName = req.body.firstName; 
  var lastName = req.body.lastName; 
  var mobile = req.body.mobile; 
    var email =req.body.email; 
    var DOB =req.body.DOB;
  var PANnumber = req.body.PANnumber; 
  var adhar = req.body.adhar; 
    var pass = req.body.password;  
     
  
    var data = { 
        "firstName": firstName, 
          "lastName": lastName, 
        "DOB":DOB, 
        "email":email, 
       "PANnumber":PANnumber,
     "adhar":adhar,  
        "password":pass, 
        "mobile":mobile 
    } 
db.collection('register').insertOne(data,function(err, collection){ 
        if (err) throw err; 
        console.log("Record inserted Successfully"); 
              
    }); 
          
    return res.redirect('signup_success.html'); 
 

});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});