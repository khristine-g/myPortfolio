let x = 10.5;
let y = 10;
let salutation = "Hello javascript";
let isWednesday= false;
let fruits= ["orange","apple" ,"mango" , "pineapple"];
let studentsMap = new Map();




function displaySum(){
var sum = x+y;
return sum;

}
function displaySalutation(name){
alert("Hello "+name);

}
function bakeCake(cakeType,numOfKgs, occasion ){
var bakeMessage = "You are baking a "+cakeType+" cake of " +numOfKgs+" kgs,for a "+occasion+" occasion.";
return bakeMessage;

}



var name = window.prompt("What is your name?");
let currentDate= new Date();
document.write("Hello " + name +" today is" + currentDate);



// alert( displaySum());
// displaySalutation("Khristine");
// alert(bakeCake("white forest", 2,"graduation"));
alert("Hello " + name +" today is" + currentDate);