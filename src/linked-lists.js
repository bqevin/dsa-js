"use strict";

//Object-based Linked List Design

function Node(element){
	this.element = element;
	this.next = null;
}

//The linked list class
function LList(){
	this.head = new Node("head");
	this.find = find;
	this.insert = insert;
	this.remove = remove;
	this.display = display;
	this.findPrevious = findPrevious;
}

//inserting new Node
function find(item){
	var currNode = this.head;
	while(currNode.element != item){
		currNode = currNode.next;
	}
	return currNode;
}

function insert(newElement, item){
	var newNode = new Node(newElement);
	var current = this.find(item);
	newNode.next = current.next;
	current.next = newNode;
	return this; //for method chaining
}

function display(){
	var currNode = this.head;
	while(!(currNode.next == null)){
		print(currNode.next.element);
		currNode = currNode.next;
	}
}

function remove(item){
	var prevNode = this.findPrevious(item);
	if(!(prevNode.next == null)){
		prevNode.next = prevNode.next.next;
	}
}

function findPrevious(item){
	var currNode = this.head;
	while(!(currNode.next == null) &&
			(currNode.next.element != item)){
		currNode = currNode.next;
	}
	return currNode;
}

//test

var cities = new LList();
cities.insert("Nairobi","head");
cities.insert("Kampala","Nairobi");
cities.insert("Eldoret","Kampala");
cities.insert("Bungoma","Kampala");

cities.display();

print("After removing Kampala: ");
cities.remove("Kampala");	

cities.display();

//Doubly linked lists



//Circular List




