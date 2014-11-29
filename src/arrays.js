//Working with Arrays

"use strict";

var langs1 = ["C++","ES6","Python","CSS","HTML"];
var langs2 = ["Ruby","Perl","Skim","Haskel"];

print(Array.isArray(langs1));

print(langs1);
print(langs1.join());
print(langs1.toString());

print(langs1.join("|"));

//shallow copy
var myLangs = langs1;

//Deep copy
function copy(arr1,arr2){
	for(var i=0; i<arr1.length; ++i){
		arr2[i] = arr1[i];
	}
}

var myLangs1 = [];
copy(langs1,myLangs1);

print("Langs I know: ", myLangs1);

//Search for a value in Array

print(langs1.indexOf("ES6"));

//creating new arrays from existing arrays
var allLangs = langs1.concat(langs2);

print("All Langs", allLangs);

print("Before splice: ", langs1);
var langs3 = langs1.splice(2,3);

print("After splice: ", langs1);

print(langs3);
//position 2 to the end?
langs3 = langs1.splice(2,langs1.length-2);
print(langs1);

//Adding elements to an arrays
var nums = [3,4,10,12];
nums.unshift(24);
nums.push(25);

print(nums);

//Removing elements in an array
nums.pop();
print("After pop(): ", nums);

nums.shift();
print("After shift(): ", nums);

// delete nums[2];
// print("After deleting [2]: ", nums);
//how to completely remove [2]?

var newElems = [20,50,5];
nums.splice(2,0,newElems);
print("After splicing at [2]: ", nums);

//using splice to remove elements from an array
nums.splice(1,1);
print("After removing [1] using splice(): ", nums);

//putting array elements in order

//reversing
nums.reverse();
print("Reversed: ",nums);

//lexicological sorting
nums.sort();
print("Sorted* lexicologically: ",nums);

// nums = [3,1,2,100,4,200];
// nums = [10,12,20,50,5,3];

//correct sorting of numbers
function compare(num1,num2){
	return num1 - num2;
}

nums.sort(compare);
//gives wrong sort order, perhaps due to
//"messed up" array -- worth investigating

print("Sorted* numerically: ", nums);
//noticed, 20,50 ignored in the sorting
//most-likely caused by splice

print("Array length? ", nums.length); //number not updated after splice


//ITERATOR FUNCTIONS

//Non-array generating iterator functions

//forEach()

function square(num){
	print(num, num*num);
}

nums = [1,3,4,5,6];

nums.forEach(square);

//every()

function isEven(num){
	return num % 2 == 0;
}

var even = nums.every(isEven);
if(even){
	print("All numbers are even");
}
else{
	print("not all numbers are even");
}

//some

var someEven = nums.some(isEven);

if(someEven){
	print("some numbers are even");
}
else{
	print("no numbers are even");
}

//reduce

function add(runningTotal,currentValue){
	return runningTotal + currentValue;
}

var sum = nums.reduce(add);
print("Sum: ", sum);

//using reduce() to perform string concatination

function concat(accString,item){
	return accString + ", " + item;
}

var sentence = langs2.reduce(concat);

print(sentence);

//Iterator Functions that Return a New Array

//map

function curve(grade){
	return grade +=5;
}

var grades = [77,85,60,30,50];

var newgrades = grades.map(curve);

print("Old grades: ", grades);

print("New grades: ", newgrades);

//string example
function first(word){
	return word[0].toUpperCase();
}

var words = "for your information";
var acronym = words.split(" ").map(first);

print(acronym.join(""));

//filter

//in ref to the other functions above

var evens = nums.filter(isEven);
print("Even Numbers: ",evens);

//interesting use of filter

function passing(num){
	return num >= 60;
}

var grades = [];
for(var i=0; i<=20; ++i){
	grades[i] = Math.floor(Math.random() * 101)
}

var passGrades = grades.filter(passing);

print("All Grades: ", grades);

print("Passing Grades: ", passGrades);

//Example with string
//misplell rule: "i before 'e' except after 'c'"

function afterc(str){
	if(str.indexOf("cie") > -1){
		return true;
	}
	return false;
}

var words = ["recieve","deceive","percieve","deceit","concieve"];
var misspelled = words.filter(afterc);

print("Mispelled words: ", misspelled);

//2D arrays

var grades = [[50,67,58],[30,50,76],[90,45.78]];


function printAverages(grades){
	var total = 0;
	var average = 0.0;

	for(var col=0; col<grades.length; ++col){
		for(var row=0; row<grades[col].length; ++row){
			total += grades[row][col];
		}

		average = total / grades[col].length;

		print("Test " + parseInt(col+1) + " average: " + 
			average.toFixed(2));

		total = 0;
		average = 0.0;
	}
}

printAverages(grades);

//For Jagged arrays?
//e.g.

// grades.push([55,20,49,67]);
grades = [[30,50],[50,67,58],[55,20,49,67]];

//fix run-time error on line 239
// printAverages(grades);

//Arrays of Objects

function Point(x,y){
	this.x = x;
	this.y = y;
}

function displayPts(arr){
	for(var i=0; i<arr.length; ++i){
		print(arr[i].x + ", "+arr[i].y);
	}
}

function displayPts2(elem){
	print(elem.x + ", " + elem.y);
}

var p1 = new Point(1,2),
	p2 = new Point(5,10),
	p3 = new Point(10,3),
	p4 = new Point(4,4);

var points = [p1,p2,p3,p4];

points.push(new Point(3,3));

points.forEach(displayPts2);

points.shift();

print("After Shift: ");
points.forEach(displayPts2);

//Arrays in objects

function weekTemps(){
	this.dataStore = [];
	
	this.add = function(temp){
		this.dataStore.push(temp);
	}

	this.average = function(){
		var total = 0;
		for(var i=0; i<this.dataStore.length; ++i){
			total += this.dataStore[i];
		}
		return total / this.dataStore.length;
	}
}


