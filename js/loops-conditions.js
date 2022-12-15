function demonstrateWhileLoop( x){

    var i = 0;
    while(i<x){
        console.log('Friday!!!!');
        i++;
    }


}

function demonstrateForLoop(x){
    for(let i=0; i<x; i++){
    console.log("Number" +i);
}
}

function DemonstrateForInLoop(list){
    for(var item in list){
        console.log(list[item]);
    }
}

function DemonstrateForOfLoop(list){
    for(var item of list){
        console.log(item);
    }
}

function DemonstrateForEach(list){
    list.forEach((value, key)=>{
        console.log("key=" +key+"value="+value);

    });
}


let myArray = ["apple" ,"samsung","oppo" ,"huawei" ,"nokia"];
let randomObjects = ["apple","mangoes","duster" ,"clothe" ,"windows"] 

randomObjects.forEach((value)=>{

value +="s";
console.log(value);
});


DemonstrateForEach(myArray);
