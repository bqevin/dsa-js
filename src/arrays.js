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
print("Sorted lexicologically: ",nums);

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

print(nums.length); //number not updated after splice



