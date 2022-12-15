//Arithmetic operators

function modulusCalculator(num1 ,num2){
    return num1 % num2;
}

//comparison operators

function greaterThanCalculator(num1 ,num2){
    return num1 > num2;
}

function comparisonEquivalence(stringA ,stringB){
    return stringA == stringB;
}

function isEvenNumber(x){
   var  modulusx =x % 2;
   var isEven = false;
   if(modulusx === 0){
    isEven =true;
   }
   return isEven;
}

//logical operators
function authenticateUser(username,password){
    var defaultUsername = "Khristine";
    var defaultPassword = "kris12345";


username === defaultUsername && password === defaultPassword?
    alert("Your credentials have been validated"):alert("Incorrect username or password");

}
function orderFood(foodInput){
   let food =foodInput.toLowerCase();
   console.log(food);
    
  
    food === "fries" || food === "chicken"?
        alert("food is available."): alert("sorry we do not have that food currently");
    }


function negateStatement(statementValue){
    var negatedValue = !statementValue;
    return negatedValue;
}

function incrementByN(originalValue,incrementValue){

    originalValue /= incrementValue;
    return originalValue;
}

function checkTruth(definedStatement){
var result = definedStatement? "This statement is true" : "This statement is false";
return result;
}




//alert(comparisonEquivalence("10",10));
//alert(isEvenNumber(10));
//authenticateUser("Khristine" ,"kris12345");
//orderFood("FRIES");
//alert(negateStatement(true));
//alert(incrementByN (2,6));
//alert(checkTruth(10>90));





let studentDetailsObj = {

    name: "Rissa" ,
    age: 24,
    course: "Pharmacy"
};
    
    let studentDetailsObj2 = {
    

        name: "Hannah" ,
        age: 18,
        course: "Bachelor of commerce"
    
    };
    let studentDetailsObj3 = {
    

        name: "Victor" ,
        age: 22,
        course: "Finance"
    
    };
    let students =new Map();
 students.set(1, studentDetailsObj);
 students.set(2, studentDetailsObj2);
 students.set(3, studentDetailsObj3);

    
    console.log(studentDetailsObj3.age);







let passengerInfo = new Map();
passengerInfo.set("name" , "Janet");
passengerInfo.set("Id" , 7789);
passengerInfo.set("Seat" , 14);

let passengerInfo2 = new Map();
passengerInfo.set("name" , "Eliana");
passengerInfo.set("Id" , 8925);
passengerInfo.set("Seat" , 33);

let passengerInfo3 = new Map();
passengerInfo.set("name" , "Lewis");
passengerInfo.set("Id" , 3428);
passengerInfo.set("Seat" , 28);

let passengers =new Map();
passengers.set(1,passengerInfo);
passengers.set(2,passengerInfo2);
passengers.set(3,passengerInfo3);



//var passenger = passengers.get(2);

//alert(passenger.get("name"));
//alert(passengerInfo.get("name"));

var student = students.get(3);
alert(student.age);



//alert(studentDetails.get("name"));





