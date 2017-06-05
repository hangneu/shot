var webshot = require("webshot");
webshot("https://www.google.com/","google.png",function(err){
	console.log(err);
});