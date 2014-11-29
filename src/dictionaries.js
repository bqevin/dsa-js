"use strict";

/*
You can perform the same functions shows in this using just 
JS arrays and objects, but creating a Dictonary class makes
doing the work easier and more fun. E.g. it's a lot easier
to use () to reference keys rather than having to use []
notation. There is also the advantage of being able to define
functions for performing colelctive operations, such as displaying
all entries in a dictonary rather than having to write loops
in the main program to perform the same operations.
*/

//The Dictonary class

//The basis for the Dictionary class is the Array class
//rather than the Object class. Later in the chapter we are
//going to sort the keys of a dictionary and JS can't sort
//the properties of an Object. Keep in mind though that everything
//in JS is an object, so an arry is an object

function Dictionary(){
	this.dataStore = new Array();
	this.add = add;
	this.find = find;
	this.remove = remove;
	this.showAll = showAll;
	this.showAllSorted = showAllSorted;
	this.count = count;
	this.clear = clear;
}

function add(key,value){
	this.dataStore[key] = value;
	return this; //to enable chaining
}

function find(key){
	return this.dataStore[key];
}

function remove(key){
	delete this.dataStore[key];
}

function showAll(){
	for each(var key in Object.keys(this.dataStore)){
		print(key + " => " + this.dataStore[key]);
	}
}

//use of Object.keys().sort()
function showAllSorted(){
	for each(var key in Object.keys(this.dataStore).sort()){
		print(key + " => " + this.dataStore[key]);
	}
}

//.length does not work with string keys!
function count(){
	var n = 0;
	for each(var key in Object.keys(this.dataStore)){
		++n;
	}
	return n;
}

function clear(){
	for each(var key in Object.keys(this.dataStore)){
		delete this.dataStore[key];
	}
}

//Example
var pBook = new Dictionary();
pBook.add("Mike","134");
pBook.add("James","564").add("Linda","342").add("Brian","001");

pBook.add("James","890"); //no duplicates, ['James'] is updated

pBook.showAll();
print("Number of Entries: ", pBook.count());
print("James extension: ", pBook.find("James"));

print("Sorted List: ");
pBook.showAllSorted();