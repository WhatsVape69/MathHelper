var test26 = function() {

var firstThing = prompt("First Number","")
var secondThing = prompt("Second Number","")


//var multiply = alert ("Multiply?")


// (side note) in the following code "var result = (firstThing*secondThing)" in between the words firstThing and secondThing there is a *
// * = multiplication
// / = division
// + = addition
// - = subtraction
//-----------CODE REPLACEMENTS-----------
// (note) COPY the code after the //
// ---------------------------------------
// var result = (firstThing*secondThing)
// var result = (firstThing/secondThing)
// var result = (firstThing+secondThing)
// var result = (firstThing-secondThing)

// var result = (firstThing+secondThing)

var result = Number(firstThing) - Number(secondThing);

console.log("1st Number: "+firstThing)
console.log("Removed")
console.log("2nd Number: "+secondThing)
console.log("Result: "+result)

alert("Result: "+result)
}
test26()
