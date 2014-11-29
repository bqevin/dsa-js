"use strict";

//A List Class Implementation

function List(){
	this.listSize = 0;
	this.pos = 0;
	this.dataStore = [];
	this.clear = clear;
	this.find = find;
	this.toString = toString;
	this.insert = insert;
	this.append = append;
	this.remove = remove;
	this.front = front;
	this.end = end;
	this.prev = prev;
	this.next = next;
	this.length = length;
	this.currPos = currPos;
	this.moveTo = moveTo;
	this.getElement = getElement;
	this.contains = contains;
}

//Append: Adding an element to a listSize

function append(element){
	this.dataStore[this.listSize++] = element;
	return this;
}

//Remove: Removing an element from a list

//first, find the element to remove

function find(element){
	for(var i=0; i<this.dataStore.length; ++i){
		if(this.dataStore[i] == element){
			return i;
		}
	}
	return -1;
}

function remove(element){
	var foundAt = this.find(element);
	if(foundAt > -1){
		this.dataStore.splice(foundAt,1);
		--this.listSize;
		return true;
	}
	return false;
}

//Determininting the number of elements in a list

function length(){
	return this.listSize;
}

//toString: retrieving a list's elements

function toString(){
	return this.dataStore;
}

//Removing all elements from a list
function clear(){
	delete this.dataStore;
	this.dataStore = [];
	this.listSize = this.pos = 0;
}

//Inserting an element into a list
function insert(element, after){
	var insertPos = this.find(after);
	if(insertPos > -1){
		this.dataStore.splice(insertPos+1, 0, element);
		++this.listSize;
		return true;
	}
	return false;
}

//Determining if a given value is in a list
function contains(element){
	for(var i=0; i<this.dataStore.length; ++i){
		if(this.dataStore[i] == element){
			return true;
		}
	}
	return false;
}

//Traversing a list
//Added return this to most, to enable chaining

function front(){
	this.pos = 0;
	return this;
}

function end(){
	this.pos = this.listSize-1;
	return this;
}

function prev(){
	if(this.pos > 0){
		--this.pos;
	}

	return this;
}

function next(){
	if(this.pos < this.listSize-1){
		++this.pos;
	}
	return this;
}

function currPos(){
	return this.pos;
}

function moveTo(position){
	this.pos = position;
	return this;
}

function getElement(){
	return this.dataStore[this.pos];
}



var names = new List();
names.append("Nandaa");
names.append("James");
names.append("Jane");
names.append("Judy");
names.append("Jason");

names.remove("Nandaa");

print(names.toString());

//Let's move to the first element of the list and display into

names.front();
print(names.getElement());

names.next().next().next().prev(); 
//Method chaining made possible by "return this"
//not in the textbook

print(names.getElement());


names.append("Gloria").append("Linda");
print(names.toString());

//iterating through a list

print("Iterating through with Iterators: ");
for(names.front(); names.currPos() < names.length()-1; names.next()){
	print(names.getElement()));
}

// print(names.front().getElement());
// print(names.currPos());
// print(names.length());

