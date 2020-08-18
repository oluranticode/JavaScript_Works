//break and cntinue
var i;
var test = "";
 for(i = 0; i < 10; i++){
     if (i == 3 ) {
         break;
     }
     test += "this number " + i + "<br>"; 
 }

 document.getElementById("demo").innerHTML = test;

 //Test input
 var x, msg, y;
 var z = 1;
msg = 20;

function myFunction(){
    x = document.getElementById("input").value;
  var w =  x.valueOf();   
  var output = document.getElementById("input2");
  document.getElementById("inputz").innerHTML = typeof w;
  y = w - z;  
  if ( y < msg ) {
    output.innerHTML= y + " is lesser than 20";
  } else {
      output.innerHTML = y + " is greater than 20";
  }
//document.getElementById("input2").innerHTML = y;
}

// ERROR
function myError() {
    var message, put;
put = document.getElementById("putInput").value;
try {
    if (put == "") throw "it is empty";
    if (isNaN(put)) throw "it is not a number";
    put = Number(put);
    if (put < 5) throw " it is lesser than 5";
    if (put > 10) throw " it is greater than 10";
}
catch(err){
    document.getElementById("input3").innerHTML = "tope " + err;
}
}

// Array Map
 var car1 = [3, 4, 5, 6, 7, 8];
var car2 = car1.map(myMap);
var txt = "";

function myMap(value){
 return value * 5;
}

document.getElementById("map").innerHTML = car2;
// JSON
 var test = '{"employees":[ ' +
         '{"firstName": "Tope", "lastName": "Aluko"}, ' +
         '{"firstName": "Olu", "lastName": "Ranti"},' +
        ' {"firstName": "dami", "lastName": "Lotun"}]}';
        hen = JSON.parse(test);

 document.getElementById("read").innerHTML = hen.employees[0].firstName + " " + hen.employees[0].lastName;

 // Array of Object
  var person ={
      firstName :"Tope", lastName:"Aluko", age : "88",
      fullName: function(){
        return this.firstName + " " + this.lastName;
      }
  };

  document.write(person.fullName());
  // Constructor Object
  function Persons(first, last, age, color){
      this.firstName = first;
      this.lastName = last;
      this.age = age;
      this.color = color;
  }

  // craeting new object
  var myFather = new Persons ("Tope", "Aluko", 50, "black");
  var myMother = new Persons ("Tobi", "Adetunji", 40, "red");
  var mySon = new Persons ("Dami", "Lotun", 30, "blue");

  document.getElementById("con").innerHTML =
   "this is @ " + myFather.firstName + myMother.lastName;

   // FUNCTION SUM
   function mySum(){
    var i;
    var sum = 0;
    for (i=0; i< arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
   
   }
   document.getElementById("sum").innerHTML = mySum(2, 3, 455, 67, 764);

   //fuction call back
   var x = 2 * 4;
   function myCall(x){
       return x;
   }
    document.getElementById("call").innerHTML = x;
// Dom by Id
  var fire = document.getElementById("dom");
  document.getElementById("dom1").innerHTML = "this is a fool " + fire.innerHTML;

  // Dom by class name
  var fire = document.getElementsByClassName("dom1");
  document.getElementById("dom2").innerHTML = "this is a fool " + fire[0].innerHTML;

  // Event onmose
  function myOver(over){
    over.innerHTML = "Aluko";
    over.style.backgroundColor = "blue";
  }

  function myOut(out){
    out.innerHTML = "Tope";
    out.style.backgroundColor = "yellow";
}

// Javascript addEventListener1
document.getElementById("myAdd1").addEventListener("click", function(){
    document.getElementById("add").innerHTML = "Wonderful";
});

// Javascript addEventListener2
function myAdd(e){
    e.preventDefault();
    document.getElementById("add").innerHTML = "Wonderful";
}
document.getElementById("myAdd2").addEventListener("click", myAdd, false);

//addEventListener

var event = document.getElementById("eventbtn");
event.addEventListener("click", myEvent1);
event.addEventListener("click", myEvent2);
event.addEventListener("mouseover", myEvent3);

function myEvent1(){
    document.getElementById("event1").innerHTML += "Temitope" + "<br>";
   // this.style.color = "blue";

}
function myEvent2(){
    document.getElementById("event2").innerHTML += "damilotun"  + "<br>";
   //this.style.color = "red";
}
function myEvent3(){
    document.getElementById("event3").innerHTML = "Aluko"  + "<br>";
    //his.style.color = "yellow";

}

document.getElementById("myDIV").addEventListener("mousemove", myFunction);

function myFunction() {
  document.getElementById("demot").innerHTML = Math.random();
}

function removeHandler() {
  document.getElementById("demot").innerHTML = " ";
}
document.getElementById("myDIV").removeEventListener("click", removeHandler);

// color btn change

function colorBtn(){
    var btn = document.getElementById("color_btn").innerHTML = "i Can See";
    // btn.style.color = "red";
}

// AJAX XMLHttpRequest
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange=function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET.html", "demod_geta18a.html?t=" + Math.random(), true);
    xhttp.send();
  }

//JSON Objects 1
var x;
var myJob = { "car":"ford", "color": "yellow", "house":"smail"};

function jobBtn(){
for (x in myJob){
document.getElementById("job").innerHTML += myJob[x] + "<br>";
}
}

//JSON Objects 2
var y;
var myJob2 = { "car":"ford", "color": "yellow", "house":"smail",
"book":{"lang":"good", "lang1":"good2", "lang2":"good3"}
};
function jobBtn1(){
for (y in myJob2.book ){
    document.getElementById("job1").innerHTML += myJob2.book[y] + "<br>";
}
}
document.getElementById("json").addEventListener("click", jobBtn1, true);