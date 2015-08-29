//Converter Class 
var fs = require("fs");
var Converter = require("csvtojson").Converter;
var fileStream = fs.createReadStream("./fish.csv");
//new converter instance 
var converter = new Converter({constructResult:true});
//end_parsed will be emitted once parsing finished 
converter.on("end_parsed", function (jsonObj) {
   console.log(jsonObj); //here is your result json object 
});
//read from file 
fileStream.pipe(converter);