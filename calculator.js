//** Server Side Calculator */

const express = require("express");
//body-parser will let access the data that was posted in my site.
const bodyParser = require("body-parser");

const app = express();

//You can use it with express by using use. 
//allows us to post nested objects
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){

    //__dirname will find file anywhere you have it.
    res.sendFile(__dirname + "/client/index.html")
});

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/client/bmiCalculator.html")
});

app.post("/", function(req, res) {

        //with body parser you can get acces to req.body

        //Number will turn a string into a number.
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("The result is " + result)
});

app.post("/bmicalculator", function(req, res) {
    
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    
    var bmi = weight / (height * height)


    res.send("Your BMI is " + bmi);

});

app.listen(3000, function(){
    
    console.log("Server is running on PORT 3000.");

})
// function bmiCalculator(weight,height) {
//     var bmi = weight / (height * height);
//     return bmi;
//     }