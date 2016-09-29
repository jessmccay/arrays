

//Purpose: finds the highest number
// Signature:function([int])
//Example: highestNumber([1,4,2]) should return 4
// highestNumber([-1,-2,-4]) should return -1

var a = [0.5, 8.9, 10.5, 0.06, .03];

var max = 0;

function highestNumber(a) {
  a.forEach(function(element) {
    if (max < element) {
      max = element
    }
      });
  console.log(max)
  // make sure console.log is OUTSIDE of the forEach!
};

//Purpose find lowest number
//signature: function([int])
// example: lowestNumber([1,7,2, 5]) ---> 1
// lowestNumber([0.5, -.05, .7, -.07])---> -0.07

var a = [0.5, 8.9, 10.5, -0.06, -0.03];

var low = 10.9;

function lowestNumber(a) {
  a.forEach(function(element) {
    if (low > element) {
      low = element
    }
      });
  console.log(low)

};


// Purpose: finds the smallest number (the closest to zero)
// Signature: array, function[int]
// Example: smallestNumber([0.1,0.01,0.001]) should return 0.001
// smallestNumber([-1,-2,-4]) should return -1
var a = [11 ,10 ,1.5, -7, 0.5]

var small = 100
function smallestNumber(a) {
  a.forEach(function(element) {
    if  (Math.abs(element) < Math.abs(small)) { //Math.abs(); is finding the absolute value (closest to 0)
     small = element
   };
 });
 console.log(small)
};


// purpose: calculate the sum
// signature: function[int]
//example: sum([1,2,3]) should return 6
// sum([]) should return 0

 var a = [10, 20, 70, -200, 25];
 var total = 0
function sum(a) {
  a.forEach(function(element) {
    total = element + to
  });
  console.log(total)
};


//purpose: Create a function that calculate the mean value. (add elements together and divide by number of elements)
//signature: function[int]
//example: sum([1,2,3]) should return 6
// sum([]) should return 0

var total = 0
var a = [1, 2, 3, 10, 10, 10]

function mean(a) {
  a.forEach(function(element) {
    total = element + total
  });
  console.log(total /(a.length))
};



//purpose: find the index of highest number in array
// signature: function[int]
//example: indexHighestNumber([1,4,2]) should return 1
// indexHighestNumber([-1,-2,-4]) should return 0

var a = [1, 50, 10, 66, -77, 4, 2, -6]

var highest = 0
var place = 0
a.forEach(function(element, index) {
    if (highest < element) {
      //if highest is LESS than the element then do function
      highest = element;
      // highest must get reassign value of element to find highest element or else highest would stay value of 0
      place = index;
    }
});
  console.log(place);
//
//


// Purpose: sort and reverse 2 string arrays. combine arrays.
//Signature: [string] [string]
//Examples: ["Alex","Sophie", "Rene"]--> alphabetical ["Alex", "Rene", "Sophie"] ---> reverse -->["Sophie", "Rene", "Alex"] --- ["Sue", "Peter"] -->alphabetical--> ["Sue", "Peter"]--->reverse> ["Peter","Sue"] -----> JOIN--> ["Sophie", "Rene", "Alex", "Peter","Sue"]

//Sort your siblings names in alphabetical order.
var n = ["Alex","Sophie", "Rene"]
n.sort();
///This alphabetically sorts your arrays

//Sort your parents names in reverse alphabetical order.
var p = ["Sue", "Alma","Peter"]
p.sort(); //alphbetical order
p.reverse();//This reverses order of array

var n = ["Alex","Sophie", "Rene"]
var p = ["Sue", "Alma","Peter"]

var c = p.concat(n); //combines arrays // created new var to save combined array

c.sort();//puts arrays in alphabetical order

c.reverse();//sorts all names in reverse;




// Create a function that determines if a given name is amongst the names.
var n = ["Alex","Sophie", "Rene"]
var p = ["Sue", "Alma","Peter"]

var c = p.concat(n); // this is combining the arrays

c.reverse();
function findName() {
  var name = prompt("what name are you looking for?")
    c.lastIndexOf(name)
  if (name === c[0] || name === c[1] || name === c[2] || name === c[3]|| name === c[4] || name === c[5]) { // it looks through each index of the array here to check for name

    alert ("Yes its here");
  }
  else {
    alert ("no, its not here");
  }
};





//Purpose: Return only even elements of array
// Signature: function[int]
//Example: evenElements([1,2,3,4]) should return [2,4]
var a = [1, 2, 3, 4, 5, 6, 2, 11]
var even = 0
function evenElements() {
a.forEach(function(element) {
    if (element % 2 === 0) {  // if there is no remainder it is even
      even = element //var even takes on element
      console.log(even); // console.log's for each even element
    }  else {
      console.log("No even numbers")
    }
  });
};




//Purpose: Return only even elements of array
// Signature: function[int]
//Example: evenElements([1,2,3,4]) should return [2,4]
var a = [1, 21, 3, 41, 5, 61, 21, 11]
var even = 0
function evenElements() {
a.forEach(function(element) {
    if (element % 2 === 0) {  // if there is no remainder it is even
      even = element //var even takes on element
      console.log(even); // console.log's for each even element
    }  else {
      console.log("No even numbers")
    }
  });
};




//Purpose Create a function that returns an array with only the odd elements from the array.
// Signature : function, arrays and intergers
// Examples : oddElements([1,2,3,4]) should return [1,3]


var a = [1, 2, 3, 4, 5, 6, 20, 10]
var odd = 0
function oddElements() {
a.forEach(function(element) {
    if (element % 2 != 0) { // same thing with even it just we put ! or doest not even
      odd = element
      console.log(odd);
    } else{
      console.log("No odd numbers");
    }
  });
};



//Purpose Create a function that returns an array with only the odd elements from the array.
// Signature : function, arrays and intergers
// Examples : oddElements([1,2,3,4]) should return [1,3]


var a = [10, 2, 30, 4, 50, 6, 20, 10]
var odd = 0
function oddElements() {
a.forEach(function(element) {
    if (element % 2 != 0) { // same thing with even it just we put ! or doest not even
      odd = element
      console.log(odd);
    } else{
      console.log("No odd numbers");
    }
  });
};


//Purpose: Create a function that take an array and a function, and returns a new array with return value of the function on each of the elements of the array.
//Signature :
// Example: mapArray([5,6], function(x) { return 2*x; }) should return [10,12]


function mapArray(array, fun) {
  var returnArray = [];
  array.forEach(function(element) {
    returnArray.push(fun(element));
});
    return returnArray;
}
