/*
    Variables
*/
var numberExample = 101;
var stringExample = "hello world";
var booleanExample = true;
var dateExample = new Date();


/*
    Objects
*/
var objectExample = { "name": "Donald", "age": 7, "isPresident": true };


/*
    Arrays
*/
var arrayExample = [1, 2, 3, 4];
arrayExample[0]; // 1
arrayExample.length; // 4
arrayExample.push(5); // arrayExample becomes [1, 2, 3, 4, 5]
arrayExample.pop(); // arrayExample becomes [1, 2, 3, 4] and returns 5

var arrayExample2 = ["dog", 5, true, 49, dateExample];


/*
    Printing
*/
console.log("I appear in the console");

alert("I appear in an alert box");


/*
    Comparisons
*/
if (1 > 2) {
    // false
} else if (1 == 1) {
    // true
} else {
    // won't get here
}

if (1 == "1") {
    // true
}

if (1 === "1") {
    // false
}

var result = 7;
switch (result) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
        console.log("odd");
        break;
    case 2:
    case 4:
    case 6:
    case 8:
        console.log("even");
        break;
    default:
        console.log("error");
} // prints odd


/*
    Loops
*/
for (var i = 0; i < 4; i++) {
    console.log(i);
} // prints 0 1 2 3

var i = 0;
while (i < 4) {
    console.log(i);
    i++;
} // prints 0 1 2 3


/*
    Functions
*/
function sayHello() {
    console.log("hello");
}
sayHello();

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
add(100, 50); // 150

function log(string, logger) {
    logger(string);
}
log("Error", console.error); // prints Error

function forEach(array, func) {
    for (var i = 0; i < array.length; i++) {
        func(array[i]);
    }
}
var shoppingList = ["bananas", "tissues", "soap"];
forEach(shoppingList, console.log); // prints bananas tisues soap


/*
    Callbacks
*/
function doSomethingWithResult(result) {
    console.log(result);
}

function doAsyncThing(callback) {
    var result = doThing();
    callback(result);
}


/*
    Classes
    Spoiler: there's no such thing
*/
function fruit(colour, shape, size) {
    this.colour = colour;
    this.shape = shape;
    this.size = size;
    this.getInfo = function() {
        return "Colour: " + colour + "\nShape: " + shape + "\nSize: " + size;
    }
}
var apple = new fruit("red", "round", "medium");
console.log(apple.getInfo()); // prints Colour: red Shape: round Size: medium


/*
    Exceptions
*/
try {
    doSomeAction();
} catch (err) {
    cleanup();
}

throw "Out of memory";


/*
    DOM
    Document Object Model
*/
var stats = document.getElementById("resultStats")
stats.innerHTML = stats.innerHTML + " hello world"
stats.style.color = "red"
stats.style.fontSize = "50px"

var links = document.getElementsByTagName("a");

function changeColorToRed(element) {
    element.style.color = "red";
}
forEach(links, changeColorToRed)


/*
    JSON
*/
JSON.parse("[1, 2, 3]");

JSON.stringify({ "name": "doug", "breed": "pug", "age": 8 });


/*
    Connectivity
*/
var clientOnline = navigator.onLine;

window.addEventListener('online', doOnlineStuff);
window.addEventListener('offline', doOfflineStuff);


/*
    HTTP requests
    With jQuery
*/
var response = $.get("https://developer.mozilla.org/en-US/docs/Web/JavaScript");

var html;
$.get("https://developer.mozilla.org/en-US/docs/Web/JavaScript", function(data) {
    html = data;
});

$.get("https://developer.mozilla.org/en-US/docs/Web/JavaScript")
    .done(function() {
        console.log("success");
    })
    .fail(function(error) {
        console.log("failure: " + error.status);
    })
    .always(function() {
        console.log("completed");
    });

$.post("endpoint.html", data);


/*
    localStorage
*/
localStorage.setItem('age', 23);
localStorage.getItem('age'); // returns 23