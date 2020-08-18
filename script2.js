    function myNeed() {
        document.getElementById('root').innerHTML = "Aluko Temitope damilotun";
    }
// Replace with words
    function myReplace() {
        var txt = "Aluko temitope Damilotun";
        var str = txt.replace("Damilotun", "Oluranti");
        document.getElementById('good').innerHTML = str;
    }

    function deClick() {
        alert("my need");
    }
    function myFunction() {
document.getElementById("demo").innerHTML = "Paragraph changed.";
}
document.getElementById("demo1").innerHTML = 5 + 6;
document.write(5 + 60);

var x, y, z, w;
x = 5 + 6 * ( 8 - 1);
y = 7;
w = (9 * 10);
z = x + y + w;
document.getElementById('mean').innerHTML = z;
// exponential
var expo = Math.pow(2, 4);//2 ** 4;
document.getElementById("expo").innerHTML = expo;
// object
var xi = {firstName:"John", lastName:"Doe"};
console.log(xi);
var car = {
name:"golf", color:"black", type: "sport", model:"2018",
fullname: function(){
return this.color + " " + this.name;
}
};
document.getElementById('demo3').innerHTML = car.fullname();
document.write(car.type + " i like this " + car.model);

// To upper case
function myCase(){
     var case1 = document.getElementById("case").innerHTML;
     document.getElementById("case").innerHTML = case1.toUpperCase();
     //toLowerCase();    
}

// Array 
var house = ["good", "better", "all", "life"];
document.getElementById("house").innerHTML = house;

function myHouse(){   
    house.push("bad", "worse");
    document.getElementById("house").innerHTML = house;
}

// Array map
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

document.getElementById("demo").innerHTML = numbers2;

function myFunction(value) {
  return value * 2;
}

// for loop...........
var i;
var test = " ";
for (i=0; i<10; i++){
test += " number " + " " + i + "<br>"
}
document.getElementById("for1").innerHTML = test;
// 2..............
var sport = ["ball", "basket", "BMW", "Dog"];
var test = "";
var i;
for (i=0; i < sport.length; i++){
test += sport[i] + "<br>" 

}
document.getElementById("for").innerHTML = test;

// for/in loop .........
var test = "";
var person ={ name: "tope", age:"20", color:"black"};
var x;
//document.getElementById("for3").innerHTML = person;
for (x in person) {
    test += " " + person[x] ;
}
document.getElementById("for2").innerHTML = test;
// while loop
test= " ";
var y = 1;
while (y < 10 ){
    test += " this is number" + y + "<br>";
    y++;
}
document.getElementById("for4").innerHTML = test;
// do while loop
var test5 =" "
var it= 0;
do {
    text5 += "<br>" + "The number is"  + it;
    it++;
  }
  while (it < 10);  
  
  document.getElementById("for5").innerHTML = text5;
