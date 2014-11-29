"use strict";

//REF: http://bitly.com/ymHm8y

//Splice()

//Getting to the bottom of this slicing thing! :)

var nums = [1,4,10,11,20];

//with negative index
nums.splice(-1,0,[5,10,3]);

//If you specify a different number of elements to insert 
//than the number you're removing, the array will have a 
//different length at the end of the call.

print(nums);

print("Length: ", nums.length);

print("Printing the array");
//loop through the array
for(var i=0; i<nums.length; ++i){
	print(nums[i]);
}

print("End of printing array\n");

//Slice

var nums2 = nums.slice(0,3);
print(nums2);

//Experimentory, worth exploring (later)

//Array.from()
//Array.of()
//Array.contains()
//Array.copyWithin()
//Array.entries()
//Array.fill()
//Array.find()
//Array.findIndex()
//Array.keys()


//toLocaleString

var number = 13899;
var date = new Date();
var myArr = [number,date, "foo"];

var str = myArr.toLocaleString();






