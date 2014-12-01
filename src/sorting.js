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
	this.shellSort1 = shellSort1;
	this.gaps = [5,3,1];
	this.setGaps = setGaps;
	this.mergeSort = mergeSort;
	this.mergeArrays = mergeArrays;
	this.quickSort = quickSort;

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

//Modified using Sedgewick's algo.
//initial gap value using:
/*
var N = this.dataStore.length;
var h = 1;
while(h < N/3){
	h = 3 * h + 1;
}
*/

function shellSort1(){
	var N = this.dataStore.length;
	var h = 1;
	while(h < N/3){
		h = 3 * h + 1;
	}
	while(h >= 1){
		for(var i=h; i<N; i++){
			for(var j=i; j>=h && this.dataStore[j] < this.dataStore[j-h];
					j-=h){
				swap(this.dataStore,j,j-h);
			}
		}
		h = (h-1)/3;
	}
}

//bottom-up Mergesort implementation
function mergeArrays(arr,startLeft,stopLeft,startRight,stopRight){
	var rightArr = new Array(stopRight - startRight+1);
	var leftArr = new Array(stopLeft - startLeft+1);
	k = startRight;
	for(var i=0; i<(rightArr.length-1); ++i){
		rightArr[i] = arr[k];
		++k;
	}

	k = startLeft;
	for(var i=0; i<(leftArr.length-1); ++i){
		leftArr[i] = arr[k];
		++k;
	}

	rightArr[rightArr.length-1] = Infinity; //a sentinel value
	leftArr[leftArr.length-1] = Infinity; //a sentinel value
	var m = 0;
	var n = 0;
	for(var k=startLeft; k<stopRight; ++k){
		if(leftArr[m] <= rightArr[n]){
			arr[k] = leftArr[m];
			m++;
		}
		else{
			arr[k] = rightArr[n];
			n++;
		}
	}
	print("left array: ", leftArr);
	print("right array: ",rightArr);
}

function mergeSort(){
	if(this.dataStore.length < 2){
		return;
	}
	var step = 1;
	var left, right;
	while(step < this.dataStore.length){
		left = 0;
		right = step;
		while(right + step <= this.dataStore.length){
			mergeArrays(this.dataStore,left,left+step,right,right+step);
			left = right + step;
			right = left + step;
		}
		if(right < this.dataStore.length){
			mergeArrays(this.dataStore,left,left+step,right,this.dataStore.length);
		}
		step *=2;
	}
}


function qSort(arr){
	if(arr.length == 0){
		return [];
	}
	var left = [];
	var right = [];
	var pivot = arr[0];
	for(var i=1; i<arr.length; i++){
		if(arr[i] < pivot){
			left.push(arr[i]);
		}else{
			right.push(arr[i]);
		}
	}
	return qSort(left).concat(pivot, qSort(right));
}

function quickSort(){
	this.dataStore = qSort(this.dataStore);
}


var nums1 = new CArray(10000).setData();
var nums2 = nums1.copy(),
		nums3 = nums1.copy(),
		nums4 = nums1.copy(),
		nums5 = nums1.copy(),
		nums6 = nums1.copy(),
		nums7 = nums1.copy(),
		nums8 = nums1.copy();

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

//Test Shell Sort
start = new Date().getTime();
nums4.shellSort();
stop = new Date().getTime();
print("Shell Sort:");
// print(nums4.toString());
print("Time taken: ", (stop-start), " ms")

//Test Shell Sort(1)
start = new Date().getTime();
nums5.shellSort1();
stop = new Date().getTime();
print("Shell Sort(1):");
// print(nums5.toString());
print("Time taken: ", (stop-start), " ms")

//Test QuickSort
start = new Date().getTime();
nums6.quickSort();
stop = new Date().getTime();
print("QuickSort:");
// print(nums6.toString());
print("Time taken: ", (stop-start), " ms")

//Test MergeSort
//has bug, needs to fix
// start = new Date().getTime();
// // nums7.mergeSort();
// stop = new Date().getTime();
// print("MergeSort:");
// // print(nums7.toString());
// print("Time taken: ", (stop-start), " ms")

start = new Date().getTime();
nums8.dataStore.sort();
stop = new Date().getTime();
print("Inbuilt Sort:");
// print(nums8.toString());
print("Time taken: ", (stop-start), " ms")


