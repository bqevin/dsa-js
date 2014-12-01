"use strict";

//Binary Search

function binSearch(arr,data){
	var upperBound = arr.length-1;
	var lowerBound = 0;
	while(lowerBound <= upperBound){
		var mid = Math.floor((upperBound + lowerBound)/2);
		if(arr[mid] < data){
			lowerBound = mid + 1;
		}
		else if(arr[mid] > data){
			upperBound = mid - 1;
		}
		else{
			return mid;
		}
	}
	return -1;
}

function insertionSort(arr){
	var temp, j;
	for(var i=0; i<=arr.length; ++i){
		temp = arr[i];
		j = i;
		while(j>0 && arr[j-1]>=temp){
			arr[j] = arr[j-1];
			--j;
		}
		arr[j] = temp;
	}
}


var nums = [];
for(var i=0; i< 10; ++i){
	nums[i] = Math.floor(Math.random() * 101);
}

// insertionSort(nums); //needs fixing

print("Enter a value to search for: ");
var val = parseInt(readline());
var retVal = binSearch(nums,val);
if(retVal >= 0){
	print("Found " + val + " at position " + retVal);
}
else{
	print("Not found");
}

