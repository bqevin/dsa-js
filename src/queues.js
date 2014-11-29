"use strict";

//Array-based Queue class implementation

function Queue(){
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.empty = empty;
	this.ptoString = ptoString;
	this.pdequeue = pdequeue;
}

function enqueue(element){
	this.dataStore.push(element);
	return this; //my addition to enable chaining
}

function dequeue(){
	return this.dataStore.shift();
}

function front(){
	return this.dataStore[0];
}

function back(){
	return this.dataStore[this.dataStore.length-1];
}

//to display all the elements in a Queue
function toString(){
	var retStr = "";
	for(var i=0; i<this.dataStore.length; ++i){
		retStr += this.dataStore[i] + "\n";
	}
	return retStr;
}

function empty(){
	if(this.dataStore.length == 0){
		return true;
	}
	return false;
}

//Test program

var q = new Queue();
q.enqueue("C++").enqueue("ES6").enqueue("PHP").enqueue("Python");

print(q.toString());
print("Front of queue: " + q.front());
print("Back of queue: " + q.front());

//Priority Queue

//using patients example

function Patient(name,code){
	this.name = name;
	this.code = code;
}

//The value for code will be an integer that represents the patient'shift
//priority, or severity. We will define the highest priority element
//as being the element with the lowest priority code.


function pdequeue(){
	var priority = this.dataStore[0].code;
	for(var i=1; i<this.dataStore.length; ++i){
		if(this.dataStore[i].code < priority){
			priority = i;
		}
		return this.dataStore.splice(priority,1);
	}
}

//Finally we add a toString() function modified to
//handle Patient object

function ptoString(){
	var retStr = "";
	for(var i=0; i<this.dataStore.length; ++i){
		retStr += this.dataStore[i].name + " code: " + 
					this.dataStore[i].code + "\n";
	}
	return retStr;
}

//demo

var p = new Patient("Smith",5);
var ed = new Queue();
ed.enqueue(p);
p = new Patient("Fred",4);
ed.enqueue(p);
p = new Patient("Jane",6);
ed.enqueue(p);
p = new Patient("Brown",1);
ed.enqueue(p);
p = new Patient("Ingram",1);
ed.enqueue(p);

print(ed.ptoString());

//not working correctly though, check it later!

var seen = ed.pdequeue();
print("Patient being treated: " + seen[0].name);
print("Patients waiting: ");
print(ed.ptoString());

//another round
var seen = ed.pdequeue();
// print("Patient being treated: " + seen[0].name); //throws error
print("Patients waiting: ");
print(ed.ptoString());



