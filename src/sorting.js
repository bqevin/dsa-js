"use strict";

//Array test bed class

function CArray(numElements){
	this.dataStore = [];
	this.pos = 0;
	this.numElements = numElements;
	this.toString = toString;
	this.clear = clear;
	this.setData = setData;
	this.swap = swap;
	this.copy = copy;
	for(var i=0; i<numElements; ++i){
		this.dataStore[i] = i;
	}

	this.bubbleSort = bubbleSort;
	this.selectionSort = selectionSort;
	this.insertionSort = insertionSort;
	this.shellSort = shellSort;
	this.gaps = [5,3,1];
	this.setGaps = setGaps;

	return this; //to enable chaining
}

function setGaps(arr){
	this.gaps = arr;
}

function setData(){
	for(var i=0; i<this.numElements; i++){
		this.dataStore[i] = Math.floor(Math.random() *
							(this.numElements + 1));
	}

	return this; //for chaining
}

function clear(){
	for(var i=0; i<this.numElements; i++){
		this.dataStore[i] = 0;
	}
}

function insert(element){
	this.dataStore[this.pos++] = element;
}

function toString(){
	var retstr = "";
	for(var i=0; i<this.dataStore.length; ++i){
		retstr += this.dataStore[i] + " ";
		if(i>0 && i%10 == 0){
			retstr += "\n";
		}
	}
	return retstr;
}

function swap(arr, index1, index2){
	var temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}

function copy(){
	//make a copy of the array
	var arr = new CArray;
	for(var i=0; i<this.dataStore.length; ++i){
		arr.dataStore[i] = this.dataStore[i];
	}

	return arr;
}

//using the test bed class

var nums = new CArray(100);
nums.setData();

// print(nums.toString());

//Bubble Sort
//O(n*n);

function bubbleSort(){
	for(var i = this.dataStore.length; i>=2; i--){
		for(var j=0; j<=i-1; j++){
			if(this.dataStore[j] > this.dataStore[j+1]){
				swap(this.dataStore, j, j+1);
			}
		}
		// print(this.toString()); //to observe the algo.
	}
}

function selectionSort(){
	var min;
	for(var i=0; i<=this.dataStore.length-2; ++i){
		min = i;
		for(var j=i+1; j<=this.dataStore.length-1; ++j){
			if(this.dataStore[j] < this.dataStore[min]){
				min = j;
			}
		}
		swap(this.dataStore,i,min);
		// print(this.toString());//to observe the algo
	}
}

function insertionSort(){
	var temp, j;
	for(var i=0; i<=this.dataStore.length; ++i){
		temp = this.dataStore[i];
		j = i;
		while(j>0 && this.dataStore[j-1]>=temp){
			this.dataStore[j] = this.dataStore[j-1];
			--j;
		}
		this.dataStore[j] = temp;
	}
}

function shellSort(){
	var temp, i, j;
	for(var g=0; g<this.gaps.length; ++g){
		for(i=this.gaps[g]; i<this.dataStore.length; ++i){
			temp = this.dataStore[i];
			for(j=i; j>=this.gaps[g] && 
				this.dataStore[j-this.gaps[g]]>temp; j -= this.gaps[g]){
				this.dataStore[j] = this.dataStore[j - this.gaps[g]];
			}
			this.dataStore[j] = temp;
		}
	}
}


var nums1 = new CArray(1000).setData();
var nums2 = nums1.copy(),
		nums3 = nums1.copy(),
		nums4 = nums1.copy();

// print("Initial: \n");
// print(nums1.toString());


var start, stop;

//Test BubbleSort (bench-mark)
// start = new Date().getTime();
// nums1.bubbleSort();
// stop = new Date().getTime();
// print("Bubble Sort:");
// // print(nums1.toString());
// print("Time taken: ", (stop-start), " ms");

//Test Selection Sort
start = new Date().getTime();
nums2.selectionSort();
stop = new Date().getTime();
print("Selection Sort:");
// print(nums2.toString());
print("Time taken: ", (stop-start), " ms")

//Test Insertion Sort
start = new Date().getTime();
nums3.selectionSort();
stop = new Date().getTime();
print("Insertion Sort:");
// print(nums3.toString());
print("Time taken: ", (stop-start), " ms")

//Test Insertion Sort
start = new Date().getTime();
nums4.shellSort();
stop = new Date().getTime();
print("Shell Sort:");
// print(nums3.toString());
print("Time taken: ", (stop-start), " ms")

